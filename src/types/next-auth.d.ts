import NextAuth from 'next-auth';
import { DefaultSession, DefaultUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      token: JWT;
      email: string;
      emailVerified: Date | null;
      name?: string | null;
      image?: string | null;
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    id: string;
    role?: 'CUSTOMER' | 'PROVIDER' | 'ADMIN';
    isFirstLogin?: boolean;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
    name?: string | null;
    email?: string | null;
    picture?: string | null;
    role?: 'CUSTOMER' | 'PROVIDER' | 'ADMIN';
    isFirstLogin?: boolean;
    sub?: string;
    iat?: number;
    exp?: number;
    jti?: string;
  }
}
