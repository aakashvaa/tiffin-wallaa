import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    // Test the connection
    await prisma.$connect();

    // Run a simple query
    const userCount = await prisma.user.count();

    // Ensure userCount is a number before returning it
    if (typeof userCount !== 'number') {
      throw new Error('Failed to retrieve user count');
    }

    return NextResponse.json({
      status: 'success',
      message: 'Database connected successfully',
      userCount,
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Database connection failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
