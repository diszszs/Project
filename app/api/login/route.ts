import { NextResponse } from 'next/server';
import { z } from 'zod';
import prisma from '@/app/lib/prisma';
import bcrypt from 'bcrypt';

const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate input with Zod
    const { email, password } = loginSchema.parse(body);

    // Check if user exists
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    // Generate session token (example only, adjust as needed)
    const token = 'your-session-token'; // Replace this with a real token generation method

    return NextResponse.json({ message: 'Login successful', token }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
