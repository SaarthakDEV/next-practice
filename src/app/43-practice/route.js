import { cookies } from "next/headers"

export const GET = async (request) => {

    const cookieStore = await cookies();
    cookieStore.set("Using next method", "working")
    
    return new Response("Cookie practice", {
        headers: {
            "Content-Type": "application/json"
        }
    })
}

