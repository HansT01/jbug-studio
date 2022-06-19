<template>
  <div class="clr-bg-1">
    <swiper class="w-full h-64" :slidesPerView="4" :spaceBetween="30" :centeredSlides="true" :modules="[Pagination]">
      <swiper-slide v-for="item in products" class="flex items-center justify-center clr-bg-0" @click="() => myfunc(item.message)">
        {{ item.message }}
        <img :src="item.image" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import 'swiper/scss'

import { Product } from '~~/composables/test'

const myfunc = (message: string) => {
  console.log(message)
}

// Typescript props
defineProps<{
  products?: Product[]
}>()
</script>

<style lang="scss" scoped></style>
