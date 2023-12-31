import { post } from '../helpers/request_helpers/'

async function apiMakePurchase(checkout) {
    try {
        return await post("checkout", checkout);
    } catch (error) {
        console.error("Error:", error);
    }
}

export { apiMakePurchase };