import { post } from '../helpers/request_helpers/'

async function apiSubmitCoupon(couponCode) {
    try {
        return await post("check-coupon", couponCode);
    } catch (error) {
        console.error("Error:", error);
    }
}

export { apiSubmitCoupon };