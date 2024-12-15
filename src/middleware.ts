import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './auth';

export default async function middlleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow access to the sign-in page
  if (pathname === '/signin') {
    return NextResponse.next();
  }

  const session = await auth();
  console.log(session);

  if (!session) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.svg).*)',
  ],
};
