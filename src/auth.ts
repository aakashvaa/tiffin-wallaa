import { authConfig } from '@/lib/auth/authConfig';
import NextAuth from 'next-auth';

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth(authConfig);
