<template>
  <div class="">
    <swiper class="w-full h-64">
      <swiper-slide v-for="item in items" class="flex items-center justify-center clr-bg-0">{{ item.message }}</swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/scss'

const items = [{ message: 'Slide 1' }, { message: 'Slide 2' }, { message: 'Slide 3' }, { message: 'Slide 5', msg: 'THIS IS a' }]
</script>

<style lang="scss" scoped></style>
