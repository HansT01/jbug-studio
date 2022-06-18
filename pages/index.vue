<template>
  <div class="items-center">
    <img src="@/assets/jumboart.png" alt="" class="jumboart" />

    <TopDivider />

    <div class="w-full items-center clr-bg-1">
      <img src="@/assets/shoppresets.png" alt="" class="h-20 object-contain px-8 max-w-full" />
      <Carousel />
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  display: flex;
  flex-direction: column;
}

img {
  user-select: none;
  pointer-events: none;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--clr-bg-0);
}

.container-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--clr-bg-1);
}

.jumbotron {
  margin-top: max(min(5vw, 10vh), 60px);
  display: flex;
  justify-content: center;
  background-color: var(--clr-bg-0);
  width: 100%;
}

.jumboart {
  width: min(90%, 800px);
  /* height: 100%; */
  /* object-position: left; */
  /* object-fit: cover; */
  /* pointer-events: none; */

  /* Gets rid of spacing between divider */
  /* margin-bottom: -2%; */

  /* Disable highlighting */
  /* user-select: none; */
}
</style>
