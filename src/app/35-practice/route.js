const data = [ 1, 2, 3];

export const GET = () => {
    return new Response(data);
}
export const POST = () => {
    data.push(4);
    return new Response(data);
}

export const PATCH = () => {
    data.splice(1, 1, 5)
    return new Response(data);
}

export const PUT = () => {
    const newData = [ 'apple', 'mango', 'banana'];
    return new Response(newData);
}

export const DELETE = () => {
    data.splice(0, data.length)
    return new Response(data);
}

