import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './auth';

export default async function middlleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const session = await auth();
  // console.log(session);

  if (!session && pathname !== '/signin') {
    const signInURL = new URL('/signin', req.nextUrl.origin);
    return NextResponse.redirect(signInURL.toString());
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.svg).*)',
  ],
};
