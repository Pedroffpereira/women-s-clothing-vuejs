const backendUrl = "http://127.0.0.1:3333"

function pathNormalizer(path) {
    if (typeof path !== 'string') {
        throw new TypeError('path is not a string');  
    }
    if (!path.startsWith('/')) {
        path = '/' + path;
    }
    return path;
}

async function post(path, object) {
    try {
        const uri = backendUrl + pathNormalizer(path);
        return await fetch(uri, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(object),
        });
    } catch (error) {
        console.error("Error:", error);
    }
}


export { post };