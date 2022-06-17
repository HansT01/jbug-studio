vbase-sass

<template>
  <div class="container">
    <div class="jumbotron">
      <img src="@/assets/jumboart.png" alt="" class="jumboart" />
    </div>
    <img class="top-divider" src="@/assets/divider.png" />
    <div class="jumbotron">
      <img src="@/assets/jumboart.png" alt="" class="jumboart" />
    </div>
    <img class="top-divider" src="@/assets/divider.png" />
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
  background-color: var(--color-bg-0);
}

.jumbotron {
  margin-top: max(min(5vw, 10vh), 60px);
  display: flex;
  justify-content: center;
  background-color: var(--color-bg-0);
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

.top-divider {
  width: 100%;

  /* Disable highlighting */
  user-select: none;

  margin-bottom: -5%;
}
</style>
