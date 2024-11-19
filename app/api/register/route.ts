import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/app/utils/db"; // Ensure the correct path to your db connection
import { generateToken } from "@/app/utils/jwt"; // JWT utility
import { z } from "zod"; // Import Zod for validation

// Define Zod schema for validation
const registerSchema = z.object({
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

export async function POST(request: Request) {
  const body = await request.json();

  // Validate the incoming data using Zod
  const validationResult = registerSchema.safeParse(body);

  if (!validationResult.success) {
    // Return validation errors if any
    return NextResponse.json(
      { error: validationResult.error.format() },
      { status: 400 }
    );
  }

  const { email, password, firstName, lastName } = validationResult.data;

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role: email === "Hadis@gmail.com" ? "admin" : "user", // Assign admin role if email matches
      },
    });

    // Generate JWT token
    const token = generateToken(newUser);

    return NextResponse.json({ message: "Registration successful", token });
  } catch (error) {
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
