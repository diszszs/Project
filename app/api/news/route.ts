import { NextResponse } from 'next/server';
import prisma from '@/app/utils/db';

// GET: ดึงข่าวทั้งหมด
export async function GET() {
  const news = await prisma.news.findMany();
  return NextResponse.json(news);
}

// POST: เพิ่มข่าวใหม่
export async function POST(request: Request) {
  const data = await request.json();
  const newNews = await prisma.news.create({ data });
  return NextResponse.json(newNews);
}

// PUT: แก้ไขข่าว
export async function PUT(request: Request) {
  const { id, ...data } = await request.json();
  const updatedNews = await prisma.news.update({
    where: { id },
    data,
  });
  return NextResponse.json(updatedNews);
}

// DELETE: ลบข่าว
export async function DELETE(request: Request) {
  const { id } = await request.json();
  await prisma.news.delete({ where: { id } });
  return NextResponse.json({ message: 'News deleted successfully' });
}
