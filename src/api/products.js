import { ProductDTO } from '../dto/Product.js'
import axios from 'axios'
export async function getProducts() {
    const products = await axios.get(import.meta.env.VITE_BACKEND_URL + 'products')
    const productsDTO = [];
    for (const product of products.data) {
        const productDTO = new ProductDTO(product)
        productsDTO.push(productDTO)
    }
    return productsDTO;
}