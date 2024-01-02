import { ProductDTO } from '../dto/Product.js'
import { get } from '../helpers/request_helpers.js'
import { setInLocalStorage, getFromLocalStorage } from '../helpers/local_storage_helpers.js'
async function getProducts() {
    const products = await get('products')
    const productsDTO = [];
    for (const product of products) {
        const productDTO = new ProductDTO(product)
        productsDTO.push(productDTO)
    }
    return productsDTO;
}
function validateDate(date) {

    if (date == null) {
        return false
    }
    if (date < Date.now()) {
        return false
    }
    return true
}
export async function saveProductsCache() {

    const date = getFromLocalStorage("Date");
    if (validateDate(date)) {
        return getProductsfromCache()
    }
    return saveProductsOnCache()
}


export async function getProductsfromCache(date) {
    return {
        "Date": date,
        "Products": getFromLocalStorage("Products")
    }

}

export async function saveProductsOnCache() {
    try {
        const dateNow = Date.now() + (30 * 60 * 1000)
        const products = await getProducts();
        setInLocalStorage("Date", dateNow);
        setInLocalStorage("Products", products);
        return {
            "Date": dateNow,
            "Products": products
        }
    } catch (e) {
        alert("The website is currently unavailable!!!!")
    }
}