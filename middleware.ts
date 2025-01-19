import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 1) Grab the origin from the request (fallback to a specific domain or empty string).
  const origin = request.headers.get("origin") || "";

  // 2) If this is an OPTIONS request (a CORS preflight), return a short-circuited response.
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": origin,
        "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT,OPTIONS",
        "Access-Control-Allow-Headers":
          "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
        "Access-Control-Allow-Credentials": "true",
      },
    });
  }

  // 3) For all other requests, run the actual route logic (NextResponse.next()),
  //    but still attach CORS headers in the response.
  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Origin", origin);
  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT,OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
