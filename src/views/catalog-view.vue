<template>
  <NavBarVue />
  <div v-if="productsStore && productsStore.products">
    <div class="row">
      <div class="col-sm-4 best2products rounded-4">
        <h2 class="red">Wer zuerst kommt, -50%</h2>
        <h5>Gratisversand, Lieferung in 10 Tagen</h5>
        <!-- Untereinander 2 Produkte Links -->
        <div
          class="product-col"
          v-for="product in productsStore.products.slice(0, 2)"
          :key="product.id"
        >
          <img
            class="rounded-4 product_image"
            :src="product.thumbnail"
            alt="Produktbild konnte nicht geladen werden"
          />
        </div>
      </div>

      <div class="col-sm-8 best3products rounded-4">
        <!-- Nebeneinander 3 Produkte Rechts -->
        <h2>Produkte die du lieben könntest</h2>
        <h5>Gratisversand, Lieferung in 10 Tagen</h5>
        <div class="row">
          <div
            class="col-sm-4"
            v-for="product in productsStore.products.slice(3, 9)"
            :key="product.id"
          >
            <img
              class="rounded-4 product_image"
              :src="product.thumbnail"
              alt="Produktbild konnte nicht geladen werden"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useProductsStore } from '../stores/products'
import NavBarVue from '../components/NavBar.vue'

const productsStore = useProductsStore()

onMounted(async () => {
  console.log('MOUNTED >>>>>>>>>>')

  await productsStore.fetchProductsfromDB()
  console.log('Products fetched')
})
</script>

<style lang="scss" scoped>
// Überschreiben Sie die Bootstrap-Variablen
$border-radius: 25px;

@import '../node_modules/bootstrap/scss/bootstrap';

.container {
  border-radius: 25px;
  padding: 25px;
}

.product-col {
  min-height: 300px;
}

.product_image {
  // Makes them scale with the parent col
  width: 220px;
  height: 220px;
  object-fit: cover; /* Dies stellt sicher, dass das Bild skaliert und zugeschnitten wird, um die festgelegten Maße zu erfüllen, während das Seitenverhältnis beibehalten wird */
}
.best3products {
  background-color: rgb(255, 250, 213);
  padding: 35px;
}

.best2products {
  background-color: #f5f5f5;
  padding: 35px;
}
</style>
