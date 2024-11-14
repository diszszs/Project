import { NextResponse } from "next/server";
import prisma from "@/app/utils/db";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const data = await request.json();
  const hashedPassword = await bcrypt.hash(data.password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        role: "user", // กำหนด role เริ่มต้นเป็น "user"
      },
    });
    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.json(
      { error: "User already exists or invalid data." },
      { status: 400 }
    );
  }
}
