import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';

export const GET = auth(function GET(req) {
  // The auth wrapper automatically:
  // 1. Checks for valid session
  // 2. Adds `req.auth` with user session data
  // 3. Returns 401 if unauthenticated
  return NextResponse.json(req.auth);
});
