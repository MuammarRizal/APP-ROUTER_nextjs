import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.url);
  const isLogin = false;
  if (!isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/about/:path*"],
};
