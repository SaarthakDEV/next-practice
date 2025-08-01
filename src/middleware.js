import { NextResponse } from "next/server";
import { clerkMiddleware } from '@clerk/nextjs/server'



export const middleware = (request) => {
    // console.log("Intercepted by middleware")
    // return NextResponse.redirect(new URL('/', request.url))

    if(request.nextUrl.pathname === '/profile'){
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }
}

// export const config = {
//     matcher: "/profile"
// }


export default clerkMiddleware()

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
