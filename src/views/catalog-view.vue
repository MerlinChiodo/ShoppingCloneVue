<template>
  <h1>Catalog</h1>
  <div v-if="productsStore && productsStore.products">
    <ul>
    <li 
      class="product"
      v-for="product in productsStore.products" :key="product.id"
    >
    <strong> {{ product.title }}</strong>
      <!-- Hier können Sie product-Daten verwenden -->
  </li>
</ul>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useProductsStore } from "../stores/products";


const productsStore = useProductsStore();

onMounted( async () => {
  console.log("MOUNTED >>>>>>>>>>")

  await productsStore.fetchProductsfromDB();
  console.log("Products fetched")
  
})


</script>
