import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './auth';
import { ROLE } from './constant';

export default async function middlleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = await auth();
  if (!session)
    return NextResponse.redirect(new URL('/signin', req.nextUrl.origin));

  // Handle role-specific routing
  if (session.user.isFirstLogin) {
    if (pathname !== '/firsttimelogin') {
      return NextResponse.redirect(
        new URL('/firsttimelogin', req.nextUrl.origin),
      );
    }
    return NextResponse.next();
  }

  // Handle consumer routes
  if (session.user.role === ROLE.CONSUMER) {
    if (
      pathname === '/provider' ||
      pathname === '/firsttimelogin' ||
      pathname === '/signin'
    ) {
      return NextResponse.redirect(new URL('/consumer', req.nextUrl.origin));
    }
    return NextResponse.next();
  }

  // Handle provider routes
  if (session.user.role === ROLE.PROVIDER) {
    if (
      pathname === '/consumer' ||
      pathname === '/firsttimelogin' ||
      pathname === '/signin'
    ) {
      return NextResponse.redirect(new URL('/provider', req.nextUrl.origin));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.svg).*)',
  ],
};
