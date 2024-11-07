import { NextResponse } from 'next/server';
import prisma from '@/app/utils/db';
const bcrypt = require('bcryptjs'); // ใช้การนำเข้าแบบ require

// GET: ดึงข้อมูลผู้ใช้ทั้งหมด (เฉพาะ admin)
export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

// POST: ลงทะเบียนผู้ใช้ใหม่
export async function POST(request: Request) {
  const data = await request.json();
  const hashedPassword = await bcrypt.hash(data.password, 10); // เข้ารหัสรหัสผ่าน
  const newUser = await prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
      role: data.role || 'user' // ตั้งค่า role เป็น 'user' เป็นค่าเริ่มต้น
    },
  });
  return NextResponse.json(newUser);
}

// PUT: อัปเดตบทบาทผู้ใช้ (เช่น เปลี่ยนเป็น admin)
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
  await prisma.user.delete({ where: { id } });
  return NextResponse.json({ message: 'User deleted successfully' });
}
