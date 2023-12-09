import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    const items = ref([])
    
    function addToCart(obj) {
      items.push(obj)
    }
  
    return { items, addToCart }
  })