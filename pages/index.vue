<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col items-center pt-4">
      <img src="@/assets/jumboart.jpg" alt="" class="jumboart" />
    </div>
    <TopDivider />

    <div class="flex flex-col clr-bg-1 w-full">
      <div class="flex flex-col self-center items-center max-w-7xl w-full">
        <img src="@/assets/shoppresets.png" alt="" class="h-20 object-contain px-8 max-w-full" />
        <Carousel />
      </div>
    </div>

    <BottomDivider />
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
