import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';

export const GET = auth(function GET(req) {
  if (req.auth) return NextResponse.json(req.auth);
  return NextResponse.json({ message: 'Not Authenticated' }, { status: 401 });
});
