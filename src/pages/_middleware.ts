import { type NextRequest, NextResponse } from 'next/server';

function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === '/') {
    // You can't use relative URLs when using the middleware
    // https://nextjs.org/docs/messages/middleware-relative-urls
    const url = req.nextUrl.clone();
    url.pathname = '/World';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export default middleware;
