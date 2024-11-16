import { NextResponse } from "next/server";
import prisma from "@/app/utils/db"; // Make sure this is correct
import bcrypt from "bcryptjs"; // Ensure bcrypt is installed and imported correctly
import jwt from "jsonwebtoken"; // We will use JWT for creating a token

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Compare the passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    // Return the success response with the token
    return NextResponse.json({ message: "Login successful", token });
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
