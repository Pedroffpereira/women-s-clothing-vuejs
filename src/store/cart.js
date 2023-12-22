import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useCouponStore } from './coupon'
import { useProductsList } from './products'
import { useRouter } from 'vue-router'
import { setInLocalStorage, getFromLocalStorage, removeFromLocalStorage } from '../helpers/local_storage_helpers'
import { post } from '../helpers/request_helpers'

export const useCartStore = defineStore('cart', () => {
  //#region Stores, Router, whatever else...
  const couponStore = useCouponStore();
  const productsStore = useProductsList();
  const router = useRouter();
  //#endregion

  //#region Cart
  const items = ref(setCart());

  function setCart() {
    const localStorageCart = getFromLocalStorage('cart');
    
    const validatedCart = validateCart(localStorageCart);
    
    if (validatedCart.length > 0) setInLocalStorage('cart', validatedCart);
    else removeFromLocalStorage('cart');

    return validatedCart;
  }

  function validateCart(cart) {
    let empty = false;
    try {
      if (!cart || !Array.isArray(cart)) {
        empty = true;
        return;
      }
      
      if (cart.length === 0) {
        empty = true;
        return;
      }
      
      //get product list from list store
      const productList = productsStore.getProducts;
      console.log(productList)
      
      /*[{
        id: 6,
        name: "DANVOUY Womens T Shirt Casual Cotton Short",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        price: 12.99,
        quantity: 13,
        rating: 3,
        cartQuantity: 1
        },
        {
        id: 1,
        name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        price: 56.99,
        quantity: 11,
        rating: 1,
        cartQuantity: 1
        },
        {
        id: 4,
        name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        price: 9.85,
        quantity: 12,
        rating: 2,
        cartQuantity: 1
      }];*/

      if (productList.length === 0) {
        empty = true;
        return;
      }

      for (let index = 0; index < cart.length; index++) {
        const item = cart[index];
        const product = productList.find(p => p.id === item.id);
        
        if (!product) {
          cart.splice(index, 1);
          continue;
        }
        
        if (product.quantity === 0) {
          cart.splice(index, 1);
          continue;
        }

        if (product.quantity !== item.quantity) {
          item.quantity = product.quantity;
          if (item.cartQuantity > item.quantity) {
            item.cartQuantity = item.quantity;
          }
        }
      }
    } catch (error) {
      console.error("Error:", error);
      empty = true;
    } finally {
      return empty ? [] : cart;
    }
  }  
  //#endregion
  
  //#region Cart operations
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

  function addToCart(item) {
    if (!itemAlreadyInCart(item)) {
      item.cartQuantity = 1;
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

      const response = await post("checkout", checkout);
      const result = await response.json();

      if (result.success) {
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