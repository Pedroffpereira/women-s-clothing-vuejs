function setInLocalStorage(key, value) {
    try {
        const validatedKey = isParameterValid(key);
        if (!validatedKey) return;
        const validatedValue = isParameterValid(value);
        if (!validatedValue) return;
        localStorage.setItem(validatedKey, validatedValue);
    } catch (error) {
        console.error("Error:", error);
    }
}

function getFromLocalStorage(key) {
    try {
        const validatedKey = isParameterValid(key);
        if (!validatedKey) return;
        const item = localStorage.getItem(validatedKey);
        if (item) return JSON.parse(item);
    } catch (error) {
        console.error("Error:", error);
    }
}

function removeFromLocalStorage(key) {
    try {
        const validatedKey = isParameterValid(key);
        if (validatedKey) localStorage.removeItem(validatedKey);
    } catch (error) {
        console.error("Error:", error);
    }
}

function isParameterValid(param) {
    if (!param) return false;
    if (typeof param !== 'string') param = JSON.stringify(param);
    return param;
}


export { setInLocalStorage, getFromLocalStorage, removeFromLocalStorage };