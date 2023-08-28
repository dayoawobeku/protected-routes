import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isUserRoute = (pathname: string) => {
  return pathname.startsWith("/api/users");
};

const isAdminRoute = (pathname: string) => {
  return pathname.startsWith("/api/admin");
};

export function middleware(req: NextRequest) {
  const role = req.headers.get("authorization");
  const { pathname } = req.nextUrl;

  if (isUserRoute(pathname)) {
    if (role === null || !["user", "admin"].includes(role)) {
      return new NextResponse(
        JSON.stringify({ success: false, message: "Not authenticated" }),
        { status: 401, headers: { "content-type": "application/json" } }
      );
    }
  }

  if (isAdminRoute(pathname) && role !== "admin") {
    return new NextResponse(
      JSON.stringify({ success: false, message: "Not authenticated" }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/users/:path*", "/api/admin/:path*"],
};
