const comments = [{
    id: 1,
    text: "First comment"
}, {
    id: 2,
    text: "Second comment"
}]


export const DELETE = async (request, { params }) => {
    const { id } = await params;
    const index = comments.findIndex(comment => comment.id == id);
    const deletedComment = comments.splice(index , 1);
    return new Response(JSON.stringify({
        deletedComment,
        comments
    }), {
        headers: {
            "Content-Type": "application/json"
        }, 
        status: 200
    })
}