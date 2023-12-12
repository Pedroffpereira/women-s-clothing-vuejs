import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCouponStore = defineStore('coupon', () => {  
  const code = ref("");
  const isCouponValid = computed(() => code.value.length > 0); 
  const discount = ref(1);
  const hasDiscount = computed(() => {
    const value = discount.value;
    return value > 0 && value < 1;
  });

  async function submitCoupon(input) {
    try {
      if (input.length === 0) return;

      const couponCode = { couponCode: input }

      const response = await fetch("http://127.0.0.1:3333/check-coupon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(couponCode),
      });

      const result = await response.json();

      if (result.success) {
        code.value = input;
        discount.value = result.discount / 100;
      }
      else
      {
        //resets values in case a previous submitted coupon was valid 
        code.value = "";
        discount.value = 1;
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