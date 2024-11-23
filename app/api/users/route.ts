import { NextResponse } from 'next/server';
import prisma from '@/app/utils/db'; 
const bcrypt = require('bcryptjs'); 

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data); 

  const hashedPassword = await bcrypt.hash(data.password, 10); 

  const newUser = await prisma.user.create({
    data: {
      email: String(data.email),        
      password: hashedPassword,          
      firstName: String(data.firstName), 
      lastName: String(data.lastName),   
      role: String(data.role || 'user'), 
    },
  });

  return NextResponse.json(newUser);
}

export async function PUT(request: Request) {
  const { id, role } = await request.json();

  const updatedUser = await prisma.user.update({
    where: { id },
    data: { role },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  await prisma.user.delete({
    where: { id },
  });

  return NextResponse.json({ message: 'User deleted successfully' });
}
