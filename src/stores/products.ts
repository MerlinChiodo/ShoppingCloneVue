import { defineStore } from 'pinia'

export const productsStore = defineStore( 'products', {

  state: () => ({
    products: []
  }),


  actions: {
    fetchProductsfromDB(){
      fetch('https://dummyjson.com/products/1')
      .then(res => res.json())
      .then(json => {
        this.products = json.products;
      })
    }
  }

} )