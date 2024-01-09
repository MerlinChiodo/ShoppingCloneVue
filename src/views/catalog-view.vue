<template>
  <NavBarVue />
  <div v-if="productsStore && productsStore.products">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-xxl-4 best2products bg_light_gray rounded-4">
          <h2 class="red">Wer zuerst kommt, -50%</h2>
          <h5>Gratisversand, Lieferung in 10 Tagen</h5>
          <!-- Untereinander 2 Produkte Links -->
          <div class="row justify-content-center">
            <div
              class="col-sm-12 my-3 d-flex flex-column justify-content-center align-items-center"
              v-if="productsStore.products[0]"
            >
              <img
                class="rounded-4 product_image_medium"
                :src="productsStore.products[0].thumbnail"
                alt="Produktbild konnte nicht geladen werden"
              />
              <h5 class="red">
                {{ productsStore.products[0].price }} €
                <span class="price_group--after_previous_price"
                  >{{
                    (
                      productsStore.products[0].price /
                      (1 - productsStore.products[0].discountPercentage / 100)
                    ).toFixed(2)
                  }}
                  €
                </span>
              </h5>
            </div>

            <div class="col-sm-6 d-flex justify-content-center" v-if="productsStore.products[1]">
              <img
                class="rounded-4 product_image_small"
                :src="productsStore.products[1].thumbnail"
                alt="Produktbild konnte nicht geladen werden"
              />
            </div>
            <div class="col-sm-6 d-flex justify-content-center" v-if="productsStore.products[2]">
              <img
                class="rounded-4 product_image_small"
                :src="productsStore.products[2].thumbnail"
                alt="Produktbild konnte nicht geladen werden"
              />
            </div>
          </div>
        </div>

        <div class="col-xxl-7">
          <!-- Nebeneinander 3 Produkte Rechts -->
          <div class="bg_light_yellow rounded-4 mx-3 best3products">
            <h2>Produkte, die du lieben könntest</h2>
            <h5>Gratisversand, Lieferung in 10 Tagen</h5>
            <div class="row">
              <div
                class="col-sm-3 my-3"
                v-for="product in productsStore.products.slice(3, 7)"
                :key="product.id"
              >
                <img
                  class="rounded-4 product_image_small"
                  :src="product.thumbnail"
                  alt="Produktbild konnte nicht geladen werden"
                />
              </div>
            </div>
          </div>

          <!-- Zweite Reihe rechts -->
          <div class="row">
            <!-- Row zum unterteilen Rechts Links -->
            <div class="col-sm-5">
              <div class="bg_light_gray rounded-4 mx-1 my-3 best3products">
                <h2 class="red">Kostenloser Versand</h2>
                <h5>Choice Day!</h5>
                <div class="row">
                  <div
                    class="col-sm-6 my-3"
                    v-for="product in productsStore.products.slice(8, 10)"
                    :key="product.id"
                  >
                    <img
                      class="rounded-4 product_image_mini"
                      :src="product.thumbnail"
                      alt="Produktbild konnte nicht geladen werden"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-7">
              <div class="bg_light_gray rounded-4 mx-1 my-3 best3products">
                <h2 class="red">Super Angebote</h2>
                <h5>Jeden Tag Angebote ab 50% Rabatt</h5>
                <div class="row">
                  <div
                    class="col-sm-4 my-3"
                    v-for="product in productsStore.products.slice(8, 11)"
                    :key="product.id"
                  >
                    <img
                      class="rounded-4 product_image_mini"
                      :src="product.thumbnail"
                      alt="Produktbild konnte nicht geladen werden"
                    />
                  </div>
                </div>
              </div>
            </div>
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

.price_group--after_previous_price {
  text-decoration: line-through;
  color: #999;
}

.red {
  color: red;
}

.container {
  border-radius: 25px;
  padding: 25px;
}
.product_image_mini {
  width: 118px;
  height: 111px;
  object-fit: cover; /* Dies stellt sicher, dass das Bild skaliert und zugeschnitten wird, um die festgelegten Maße zu erfüllen, während das Seitenverhältnis beibehalten wird */
  object-position: center;
}

.product_image_small {
  width: 184px;
  height: 184px;
  object-fit: cover; /* Dies stellt sicher, dass das Bild skaliert und zugeschnitten wird, um die festgelegten Maße zu erfüllen, während das Seitenverhältnis beibehalten wird */
  object-position: center;
}

.product_image_medium {
  width: 224px;
  height: 224px;
  object-fit: cover; /* Dies stellt sicher, dass das Bild skaliert und zugeschnitten wird, um die festgelegten Maße zu erfüllen, während das Seitenverhältnis beibehalten wird */
  object-position: center;
}
.best3products {
  padding: 35px;
}

.best2products {
  padding: 35px;
}

.bg_light_yellow {
  background-color: rgb(255, 250, 213);
}

.bg_light_gray {
  background-color: #f5f5f5;
}
</style>
