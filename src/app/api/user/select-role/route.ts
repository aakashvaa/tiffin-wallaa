import { auth } from '@/auth';
import { db } from '@/lib/db';
import { AuthenticatedRequest } from '@/types/nextAuthRequest';

import z from 'zod';
import { NextRequest, NextResponse } from 'next/server';
import { UserRole } from '@prisma/client';

const selectRoleSchema = z.object({
  role: z.enum(['CONSUMER', 'PROVIDER', 'ADMIN']),
});

async function selectRole(req: AuthenticatedRequest) {
  // The auth wrapper automatically:
  // 1. Checks for valid session
  // 2. Adds `req.auth` with user session data
  // 3. Returns 401 if unauthenticated

  const payload = await req.json();
  const parsedData = selectRoleSchema.safeParse(payload);
  console.log(parsedData, req.auth);

  if (!parsedData.success) {
    return NextResponse.json(
      {
        message: 'Invalid data',
        error: parsedData.error.format(),
      },
      { status: 400 },
    );
  }
  const { role } = parsedData.data;
  // Update the user role in the database
  try {
    await db.user.update({
      where: {
        id: req.auth?.user.id,
      },
      data: {
        role: role as UserRole,
        isFirstLogin: false,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Update failed' }, { status: 400 });
  }
  //   const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  //   console.log('req.auth', req.auth, token, payload);

  return NextResponse.json(req.auth);
}

export const POST = auth(selectRole);
