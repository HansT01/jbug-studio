<template>
  <div class="flex">
    <Drawer />
    <div class="shade l-0 t-0 fixed w-full h-full z-40 lg:hidden" @click="drawerOpen().value = false" :class="{ hidden: !drawerOpen().value }" />
    <div class="flex flex-col">
      <Navigation />
      <NuxtPage class="custom-pt flex flex-col content-center clr-bg-0" />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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

.shade {
  background-color: #222;
  opacity: 0.46;
}
</style>
