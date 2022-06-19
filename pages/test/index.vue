<template>
  <div>
    <Carousel :items="items" />
  </div>
</template>

<script setup lang="ts">
const items = [{ message: 'Slide 3' }, { message: 'Slide 2' }, { message: 'Slide 3' }, { message: 'Slide 5' }]
</script>

<style lang="scss" scoped></style>
