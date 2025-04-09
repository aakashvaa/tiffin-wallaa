// types/auth.ts (or wherever you prefer)
import type { NextRequest } from 'next/server';
import type { Session } from 'next-auth';

export type AuthenticatedRequest = NextRequest & {
  auth: Session | null;
};
