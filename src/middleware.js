import { NextResponse } from "next/server";


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