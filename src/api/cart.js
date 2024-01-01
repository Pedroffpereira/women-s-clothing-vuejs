import { post } from '../helpers/request_helpers/'
import { setInLocalStorage, getFromLocalStorage, removeFromLocalStorage } from '../helpers/local_storage_helpers.js'

async function apiMakePurchase(checkout) {
    try {
        return await post("checkout", checkout);
    } catch (error) {
        console.error("Error:", error);
    }
}

function setCart(products) {
    const localStorageCart = getFromLocalStorage('cart');
    
    const validatedCart = validateCart(localStorageCart, products);
    
    if (validatedCart.length > 0) setInLocalStorage('cart', validatedCart);
    else removeFromLocalStorage('cart');

    return validatedCart;
}

function validateCart(cart, products) {
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

      if (products.length === 0) {
        empty = true;
        return;
      }

      for (let index = 0; index < cart.length; index++) {
        const item = cart[index];
        const product = products.find(p => p.id === item.id);
        
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

export { apiMakePurchase, setCart };