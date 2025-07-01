

const comments = [{
    id: 1,
    text: "First comment"
}, {
    id: 2,
    text: "Second comment"
}]

const POST = async (request) => {
    const get_comments = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: get_comments.text
    }
    comments.push(newComment);
    return new Response(JSON.stringify(comments), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201
    })
}

export { POST }