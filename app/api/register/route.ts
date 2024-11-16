import { NextResponse } from "next/server";
import prisma from "@/app/utils/db"; // Ensure the correct path to your db connection
import bcrypt from "bcryptjs"; // For hashing passwords

export async function POST(request: Request) {
  const { firstName, lastName, email, password } = await request.json();

  // Set role to 'admin' if email matches the specific one, otherwise 'user'
  const role = email === 'Hadis@gmail.com' ? 'admin' : 'user';

  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in the database
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role: role, // Set role dynamically based on email
      },
    });

    return NextResponse.json({ message: 'Registration successful' });
  } catch (error) {
    return NextResponse.json({ error: 'Registration failed' }, { status: 400 });
  }
}
