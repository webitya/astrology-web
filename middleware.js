import { NextResponse } from "next/server"

export function middleware(request) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Define public paths that don't require authentication
  const isPublicPath = path === "/login"

  // Check if the path starts with /admin
  const isAdminPath = path.startsWith("/admin")

  // Get the token from the cookies
  const isAuthenticated = request.cookies.has("auth")

  // If the path is an admin path and the user is not authenticated,
  // redirect to the login page
  if (isAdminPath && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // If the path is a public path and the user is authenticated,
  // redirect to the admin dashboard
  if (isPublicPath && isAuthenticated) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url))
  }

  // Otherwise, continue with the request
  return NextResponse.next()
}

export const config = {
  matcher: ["/login", "/admin/:path*"],
}
