vbase-sass

<template>
  <div class="container">
    <div class="jumbotron">
      <img src="@/assets/jumboart.png" alt="" class="jumboart" />
    </div>

    <img class="top-divider" src="@/assets/divider.png" />

    <div class="container-inner">
      <img src="@/assets/shoppresets.png" alt="" class="title" />
      <Carousel />
    </div>

    <img class="bottom-divider" src="@/assets/divider2.png" />
  </div>
</template>

<script lang="ts">
import Carousel from '@/components/Carousel.vue'

export default {
  components: { Carousel },
  setup() {},
}
</script>

<style lang="scss" scoped>
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
  height: 100%;
  object-position: left;
  object-fit: cover;
  pointer-events: none;

  /* Gets rid of spacing between divider */
  margin-bottom: -2%;

  /* Disable highlighting */
  user-select: none;
}

.title {
  height: 5rem;
  object-fit: contain;
  margin: 2rem 0rem;
  max-width: 80vw;
}

.top-divider {
  width: 100%;

  /* Disable highlighting */
  user-select: none;

  margin-bottom: -5%;
}

.bottom-divider {
  width: 100%;

  /* Disable highlighting */
  user-select: none;

  background-color: var(--clr-bg-1);
  margin-bottom: -1rem;
}
</style>
