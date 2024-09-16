import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/public(.*)']);
const protectedRoutes = createRouteMatcher(['/wishlist(.*)', '/cart(.*)']);

export default clerkMiddleware((auth, request) => {
  // If it's a public route, allow it to proceed
  if (isPublicRoute(request)) {
    return NextResponse.next();
  }

  // If it's a protected route, check if the user is authenticated
  if (protectedRoutes(request)) {
    const { userId } = auth;

    // If the user is not logged in, redirect to sign-in
    if (!userId) {
      const signInUrl = new URL('/sign-in', request.url);
      signInUrl.searchParams.set('redirect_url', request.url); // Optional: Add a redirect back to the attempted URL after login
      return NextResponse.redirect(signInUrl);
    }
  }

  // Default action: allow access
  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};