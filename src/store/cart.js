import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useCouponStore } from './coupon'
import { useProductsList } from './products'
import { useRouter } from 'vue-router'
import { setInLocalStorage, getFromLocalStorage, removeFromLocalStorage } from '../helpers/local_storage_helpers'
import { apiMakePurchase } from '../api/cart'

export const useCartStore = defineStore('cart', () => {
  //#region Stores, Router, whatever else...
  const couponStore = useCouponStore();
  const productsStore = useProductsList();
  const router = useRouter();
  //#endregion

  const items = ref([]);
  
  //#region Cart operations
  function addCart(cart) {
    if(Array.isArray(cart)) items.value = cart; 
  }

  function incrementQuantity(id) {
    try {
      const item = items.value.find(item => item.id === id);
      if (!item) return;

      if (item.cartQuantity < item.quantity) {
        item.cartQuantity++;
        setInLocalStorage('cart', items.value);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function decrementQuantity(id) {
    try {
      const item = items.value.find(item => item.id === id);
      if (!item) return;

      if (item.cartQuantity > 1) {
        item.cartQuantity--;
        setInLocalStorage('cart', items.value);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function addToCart(item, quantity = 1) {
    if (!item || item.quantity === 0) return;
    if (!itemAlreadyInCart(item)) {
      if (!quantity || quantity < 1) quantity = 1;
      if (quantity > item.quantity) quantity = item.quantity;
      item.cartQuantity = quantity;
      items.value.push(item);
      setInLocalStorage('cart', items.value);
    }
  }

  function removeFromCart(id) {
    const itemIndex = items.value.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      items.value.splice(itemIndex, 1);
      if (items.value.length > 0) {
        setInLocalStorage('cart', items.value);
      }
      else {
        removeFromLocalStorage('cart');
      }
    }
  }

  function itemAlreadyInCart(item) {
    try {
      return items.value.some(cartItem => cartItem.id === item.id);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  //#endregion

  //#region purchase
  const purchase = ref({});
  const hasPurchased = computed(() => Object.keys(purchase.value).length > 0);

  async function makePurchase() {
    try {
      if (items.value.length === 0) {
        router.push('/');
        return;
      }

      const productList = [];
      items.value.forEach(item => {
        productList.push({ id: item.id, quantity: item.cartQuantity })
      })

      const checkout = { products: productList, coupon: couponStore.code }

      const result = await apiMakePurchase(checkout);

      if (result.success) {
        result.checkout.products = JSON.parse(result.checkout.products);
        purchase.value = result;
        items.value = [];
        removeFromLocalStorage('cart');
      }
      else purchase.value = {
        success: false, 
        error: "An error occurred while processing your purchase."
      };

    } catch (error) {
      console.error("Error:", error);
      purchase.value = {
        success: false, 
        error: "An error occurred while processing your purchase." 
      };
    } finally {
      router.push('/Purchase');
    }
  }
  //#endregion

  //#region Price
  const totalPrice = computed(() => {
    let sum = 0;
    items.value.forEach(item => {
      sum += item.price * item.cartQuantity
    });
    return sum;
  })
  const discountPrice = computed(() => totalPrice.value * couponStore.discount);
  const total = computed(() => couponStore.hasDiscount ?  totalPrice.value - discountPrice.value : totalPrice.value);
  //#endregion

  return {
    items,
    addCart,
    incrementQuantity,
    decrementQuantity,
    totalPrice,
    discountPrice,
    total,
    addToCart,
    removeFromCart,
    makePurchase,
    purchase,
    hasPurchased,
  }
})