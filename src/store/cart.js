import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useCouponStore } from './coupon'


export const useCartStore = defineStore('cart', () => {
    const items = ref([]);
    const totalPrice = computed(() => {
      /*let sum = 0;
      items.forEach(item => {
        sum += item.price * item.quantity
      });
      return sum;*/
      return 19.3494;
    })

    const couponStore = useCouponStore();
    const discountPrice = computed(() => totalPrice.value * couponStore.discount);
    
    function addToCart(obj) {
      items.value.push(obj);
    }
  
    return {
      items,
      totalPrice,
      discountPrice,
      addToCart,
    }
  })