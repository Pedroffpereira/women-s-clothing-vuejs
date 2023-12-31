import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { apiSubmitCoupon } from '../api/coupon'

export const useCouponStore = defineStore('coupon', () => {  
  const code = ref("");
  const isCouponValid = computed(() => code.value.length > 0); 
  const discount = ref(0);
  const hasDiscount = computed(() => discount.value > 0 && discount.value < 1);

  async function submitCoupon(input) {
    try {
      if (input.length === 0) return;

      const couponCode = { couponCode: input }

      const result = await apiSubmitCoupon(couponCode);

      if (result.success) {
        code.value = input;
        discount.value = result.discount / 100;
      }
      else
      {
        //resets values in case a previous submitted coupon was valid 
        code.value = "";
        discount.value = 0;
      }
      
      return result;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return {
    code,
    isCouponValid,
    discount, 
    hasDiscount, 
    submitCoupon,
  }
})