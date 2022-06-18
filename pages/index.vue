<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col items-center clr-bg-0 pt-4">
      <img src="@/assets/jumboart.png" alt="" class="jumboart" />

      <TopDivider />
    </div>

    <div class="flex flex-col items-center">
      <img src="@/assets/shoppresets.png" alt="" class="h-20 object-contain px-8 max-w-full" />
      <Carousel />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  user-select: none;
  pointer-events: none;
}

.jumboart {
  width: min(90%, 800px);
}
</style>
