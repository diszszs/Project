import { NextResponse } from 'next/server';
import prisma from '@/app/utils/db';

// Fetch all matches
export async function GET() {
  try {
    const matches = await prisma.match.findMany({
      orderBy: { date: 'desc' }, // Sort matches by date (latest first)
    });
    return NextResponse.json(matches);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch matches' }, { status: 500 });
  }
}

// Add a new match
export async function POST(request: Request) {
  try {
    const { date, teams, score } = await request.json();

    const match = await prisma.match.create({
      data: {
        date: new Date(date),
        teams,
        score,
      },
    });

    return NextResponse.json({ match });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add match' }, { status: 500 });
  }
}

// Update an existing match
export async function PUT(request: Request) {
  try {
    const { id, date, teams, score } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Match ID is required' }, { status: 400 });
    }

    const updatedMatch = await prisma.match.update({
      where: { id },
      data: {
        date: new Date(date),
        teams,
        score,
      },
    });

    return NextResponse.json(updatedMatch);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update match' }, { status: 500 });
  }
}

// Delete a match
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Match ID is required' }, { status: 400 });
    }

    await prisma.match.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Match deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete match' }, { status: 500 });
  }
}