<template>
  <div class="container">
    <div class="jumbotron">
      <img src="@/assets/jumboart.png" alt="" class="jumboart" />
    </div>

    <TopDivider />

    <div class="container-inner">
      <img src="@/assets/shoppresets.png" alt="" class="title" />
      <Carousel />
    </div>

    <BottomDivider />
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
</style>
