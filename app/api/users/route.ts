import { NextResponse } from 'next/server';
import prisma from '@/app/utils/db'; // Path ของ prisma utils
const bcrypt = require('bcryptjs'); // ใช้ require สำหรับ bcrypt

// GET: ดึงข้อมูลผู้ใช้ทั้งหมด (เฉพาะ admin)
export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// POST: ลงทะเบียนผู้ใช้ใหม่
export async function POST(request: Request) {
  const data = await request.json();
  console.log(data); // Debug ข้อมูล input

  const hashedPassword = await bcrypt.hash(data.password, 10); // เข้ารหัสรหัสผ่าน

  const newUser = await prisma.user.create({
    data: {
      email: String(data.email),         // ต้องเป็น String
      password: hashedPassword,          // เข้ารหัสแล้ว
      firstName: String(data.firstName), // firstName ที่ผู้ใช้ป้อน
      lastName: String(data.lastName),   // lastName ที่ผู้ใช้ป้อน
      role: String(data.role || 'user'), // role default เป็น 'user'
    },
  });

  return NextResponse.json(newUser);
}

// PUT: อัปเดตบทบาทผู้ใช้ (เปลี่ยน role เช่น admin)
export async function PUT(request: Request) {
  const { id, role } = await request.json();

  const updatedUser = await prisma.user.update({
    where: { id },
    data: { role },
  });

  return NextResponse.json(updatedUser);
}

// DELETE: ลบผู้ใช้
export async function DELETE(request: Request) {
  const { id } = await request.json();

  await prisma.user.delete({
    where: { id },
  });

  return NextResponse.json({ message: 'User deleted successfully' });
}
