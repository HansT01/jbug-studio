<template>
  <Navigation />
  <router-view />
</template>

<script lang="ts">
import Navigation from './components/Navigation.vue'
export default {
  components: {
    Navigation,
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/variables.css';

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  font-family: var(--font-family);
}

body {
  background: var(--color-bg-0);
}

a {
  color: unset;
  text-decoration: none;
}
</style>
