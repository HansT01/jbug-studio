<template>
  <div class="sidebar sticky-sidebar fixed-sidebar h-screen overflow-y-auto z-50 clr-bg-1 clr-text-0" :class="{ '-ml-64': !drawerOpen().value }">
    <!-- Container > Content -->
    <div class="flex flex-col z-50 h-auto static place-items-center">
      <!-- Logo and close -->
      <div class="flex items-center w-full px-6 py-4 h-14">
        <NuxtLink to="/">
          <img src="@/assets/jbuglogo.png" alt="" class="h-8 max-h-full max-w-full object-contain invert-clr" />
        </NuxtLink>
        <button @click="drawerOpen().value = false" class="ml-auto">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            class="invert-clr"
          >
            <path
              d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
            />
          </svg>
        </button>
      </div>
      <NuxtLink to="/" class="link-item" v-on:mouseover="">
        <button class="mx-2 font-bold">HOME</button>
      </NuxtLink>
      <NuxtLink to="/about" class="link-item">
        <button class="mx-2 font-bold">ABOUT US</button>
      </NuxtLink>
      <NuxtLink to="/shop" class="link-item">
        <button class="mx-2 font-bold">SHOP</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  drawerOpen().value = window.innerWidth >= 1024
})
</script>

<style lang="css" scoped>
.sidebar {
  min-width: 256px;
  transition: margin-left 150ms ease-in-out 0s;
}

.sticky-sidebar {
  @apply lg:!sticky lg:!top-0;
}

.fixed-sidebar {
  @apply fixed;
}

.link-item {
  @apply px-4 py-2 w-full;
  transition: background-color 150ms ease-in-out 0s;
  &:hover {
    background-color: var(--clr-bg-2);
  }
}

.invert-clr {
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(269deg) brightness(108%) contrast(100%);
}
</style>
