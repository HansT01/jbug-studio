<template>
  <div class="flex flex-row justify-center p-8">
    <img src="@/assets/jbuglogo2.png" alt="" class="mt-auto object-contain h-16 mr-8" />
    <div class="custom-border flex flex-col justify-around">
      <NuxtLink to="/" class="m-1 font-bold">HOME</NuxtLink>
      <NuxtLink to="/about" class="m-1 font-bold">ABOUT US</NuxtLink>
      <NuxtLink to="/shop" class="m-1 font-bold">SHOP</NuxtLink>
      <NuxtLink to="#" class="m-1 font-bold">FOLLOW US ON</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style scoped>
.custom-border {
  border-left: 4px solid var(--clr-bg-1);
  padding-left: 1rem;
}
</style>
