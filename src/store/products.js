import {defineStore} from 'pinia'

export const useProductsList = defineStore("ProductList", {
    state: () => ({
        date: Date,
        products: [],
    }),
    getters: {
        getDate: (state) => state.date,
        getProducts: (state) => state.products
    },
    actions: { 

        addDate(date) {

            this.date = date
        },
        addProduct(product){
            this.products.push(product)
        },
        addProductList(productList){
            this.products = productList
        }
    }

})