<template>
  <div class="clr-bg-1">
    <!-- https://swiperjs.com/demos#centered-auto -->
    <swiper class="w-full" :slidesPerView="'auto'" :spaceBetween="30" :centeredSlides="true" :modules="[Pagination]">
      <!-- Every slide has a set width and height -->
      <swiper-slide v-for="item in products" class="slide flex items-center justify-center" @click="() => myfunc(item.message)">
        <!-- The contained image will do its best to fill up the slide -->
        <img v-if="item.image" class="object-contain max-w-full max-h-full" :src="item.image" alt="Product image" />
        <div v-else class="w-full h-full clr-bg-0 flex justify-center items-center">{{ item.message }}</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/pagination'

import { Product } from '~~/composables/test'

const myfunc = (message: string) => {
  console.log(message)
}

// Typescript props
defineProps<{
  products?: Product[]
}>()
</script>

<style lang="scss" scoped>
.slide {
  width: min(450px, 60vw);
  height: 300px;
}
</style>
