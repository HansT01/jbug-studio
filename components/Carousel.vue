<template>
  <div class="clr-bg-1">
    <swiper class="w-full h-64" :slidesPerView="4" :spaceBetween="30" :centeredSlides="true" :modules="[Pagination]">
      <swiper-slide v-for="item in items" class="flex items-center justify-center clr-bg-0" @click="() => myfunc(item.message)">
        {{ item.message }}
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import 'swiper/scss'

const myfunc = (message: string) => {
  console.log(message)
}

// Typescript props
const props = defineProps<{
  items?: {
    message: string
  }[]
}>()
</script>

<style lang="scss" scoped></style>
