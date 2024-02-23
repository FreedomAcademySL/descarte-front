import { User } from '@/dtos';
import { AuthStorage } from '@/enums';
import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(async function middleware(req) {
  const secret = process.env.JWT_SECRET;
  const token = await getToken({
    req,
    secret: secret,
    cookieName: AuthStorage.AUTH_TOKEN_NAME,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user } = (token as { user: User; accessToken: string }) || {};

  const isAuth = !!token;
  const isAuthPage = req.nextUrl.pathname.startsWith('/auth');

  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL(`/program`, req.url));
    }
    return null;
  }

  if (!isAuth) {
    let from = req.nextUrl.pathname;
    if (req.nextUrl.search) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      from += req.nextUrl.search;
    }

    return NextResponse.redirect(new URL(`/auth/login`, req.url));
  }
});
