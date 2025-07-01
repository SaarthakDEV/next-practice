const comments = [{
    id: 1,
    text: "First comment"
}, {
    id: 2,
    text: "Second comment"
}]

export async function GET( request, { params} ){
    const { id } = await params;
    const comment = comments[id];
    return new Response(JSON.stringify(comment), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 200
    })
}