import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './auth';
import { ROLE } from './constant';

export default async function middlleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const session = await auth();
  // console.log(session);
  // Skip redirect logic on pages that are already the destination
  if (!session && pathname !== '/signin') {
    const signInURL = new URL('/signin', req.nextUrl.origin);
    return NextResponse.redirect(signInURL.toString());
  }

  if (
    pathname === '/firsttimelogin' ||
    pathname === '/customer' ||
    pathname === '/provider'
  ) {
    return NextResponse.next();
  }
  console.log(session?.user);
  if (session && session.user.isFirstLogin) {
    const signInURL = new URL('/firsttimelogin', req.nextUrl.origin);
    return NextResponse.redirect(signInURL.toString());
  } else if (session && session.user.role === ROLE.CUSTOMER) {
    const signInURL = new URL('/customer', req.nextUrl.origin);
    return NextResponse.redirect(signInURL.toString());
  } else if (session && session.user.role === ROLE.PROVIDER) {
    const signInURL = new URL('/provider', req.nextUrl.origin);
    return NextResponse.redirect(signInURL.toString());
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.svg).*)',
  ],
};
