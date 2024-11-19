import { NextResponse } from "next/server";
import prisma from "@/app/utils/db"; // Ensure the correct path to your db connection
import bcrypt from "bcryptjs"; // For comparing hashed passwords
import { generateToken } from "@/app/utils/jwt"; // JWT utility

export async function POST(request: Request) {
  const { email, password } = await request.json();

  try {
    // Retrieve the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Compare the entered password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
    }

    // Generate JWT token
    const token = generateToken(user);

    return NextResponse.json({ message: "Login successful", token });
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
