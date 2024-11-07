import { NextResponse } from 'next/server';
import prisma from '@/app/utils/db';

// GET: ดึงข้อมูลนักเตะทั้งหมด
export async function GET() {
  const players = await prisma.player.findMany();
  return NextResponse.json(players);
}

// POST: เพิ่มนักเตะใหม่
export async function POST(request: Request) {
  const data = await request.json();
  const newPlayer = await prisma.player.create({ data });
  return NextResponse.json(newPlayer);
}

// PUT: แก้ไขข้อมูลนักเตะ
export async function PUT(request: Request) {
  const { id, ...data } = await request.json();
  const updatedPlayer = await prisma.player.update({
    where: { id },
    data,
  });
  return NextResponse.json(updatedPlayer);
}

// DELETE: ลบนักเตะ
export async function DELETE(request: Request) {
  const { id } = await request.json();
  await prisma.player.delete({ where: { id } });
  return NextResponse.json({ message: 'Player deleted successfully' });
}
