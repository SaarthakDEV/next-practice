import { NextResponse } from "next/server";

const comments = [{
    id: 1,
    text: "First comment"
}, {
    id: 2,
    text: "Second comment"
}, {
    id: 3,
    text: "Third comment"
}]


export const GET = async (request) => {
    const searchParams = await request.nextUrl.searchParams;
    console.log(searchParams);
    const query = searchParams.get("query");
    console.log(query);
    const filteredComment = query ? comments.filter(comment => {
        console.log(comment.text)
        console.log(comment.text)
        return comment.text.toLowerCase().includes(query)
    }) : [];

    return new Response(JSON.stringify(filteredComment))
}