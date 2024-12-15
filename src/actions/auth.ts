'user server';

import { signOut } from '@/auth';
import { signIn } from 'next-auth/react';

export async function login(provider: string) {
  await signIn(provider, { redirectTo: '/' });
}

export async function logout() {
  // await signOut({ redirectTo: '/signin' });
  await signOut({ redirectTo: '/signin' });
}
