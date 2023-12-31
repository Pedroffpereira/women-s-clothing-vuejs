import axios from 'axios'
const backendUrl = import.meta.env.VITE_BACKEND_URL

function pathNormalizer(path) {
    if (typeof path !== 'string') {
        throw new TypeError('path is not a string');  
    }
    if (!path.startsWith('/')) {
        path = '/' + path;
    }
    return path;
}

async function get(path) {
    try {
        const uri = backendUrl + pathNormalizer(path);
        const response = await axios.get(uri);
        return response.data; 
    } catch (error) {
        return error.response.data;
    }
}

async function post(path, object) {
    try {
        const uri = backendUrl + pathNormalizer(path);
        const response = await axios.post(uri, object);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}


export { get, post };