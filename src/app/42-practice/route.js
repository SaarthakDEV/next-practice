import { headers } from "next/headers"

export const GET = async (request) => {
    // const requestHeaders = new Headers(request.headers);
    // console.log(requestHeaders.get("Authorization"))
    // return new Response("Profile data")


    const headerList = await headers();
    console.log(headerList.get("Authorization"));
    return new Response("Profile data");
}