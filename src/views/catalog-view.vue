<template>
    <h1>Catalog</h1>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  components: {  },
  setup() {
    const todo = ref('')
    return {
      todo
    }
  }
})
</script>

<script lang="ts" setup>
import { onMounted } from "vue";


onMounted( () => {
  console.log("MOUNTED >>>>>>>>>>")
})


</script>
