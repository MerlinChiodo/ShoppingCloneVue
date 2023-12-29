import { defineStore } from 'pinia'

export interface Product {
  id: number
  title: string
  description: string
  thumbnail: string
  // other properties
}

interface ProductsList {
  products: Product[]
}

export const useProductsStore = defineStore('products', {
  state: (): ProductsList => ({
    products: []
  }),
  actions: {
    async fetchProductsfromDB() {
      const fetchURL = 'https://dummyjson.com/products/'
      try {
        const response = await fetch(fetchURL)
        if (!response.ok) {
          throw new Error(`Failed to fetch json from ${fetchURL}`)
        }
        const json: any = await response.json()

        // Hier sicherstellen, dass jedes Element dem Typ Product entspricht
        if (Array.isArray(json.products)) {
          this.products = json.products as Product[]
        } else {
          throw new Error('The json.products is not in Array format.')
        }
      } catch (error) {
        console.error('error fetching products', error)
        throw error
      }
    }
  }
})
