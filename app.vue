<template>
  <Navigation />
  <NuxtPage />
</template>

<style lang="scss">
@import '@/assets/css/main.css';

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  font-family: var(--font-family);
}

body {
  background: var(--clr-bg-0);
}

a {
  color: unset;
  text-decoration: none;
}
</style>
