const comments = [{
    id: 1,
    text: "First comment"
}, {
    id: 2,
    text: "Second comment"
}]

export const PATCH = async (request, { params }) => {
    const { id } = await params;
    const newText = await request.json();

    const newComment = {
        id: id,
        text: newText.text
    }
    const index = comments.findIndex(comment => comment.id == id);
    comments.splice(index, 1, newComment)
    return new Response(JSON.stringify(comments), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 202

    })
}