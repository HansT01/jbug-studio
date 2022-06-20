<template>
  <div
    class="sidebar sticky-sidebar fixed-sidebar h-screen overflow-y-auto z-50 clr-bg-0 shadow"
    :class="{
      hidden: !drawerOpen().value,
    }"
  >
    <!-- Container > Content -->
    <div class="flex flex-col z-50 h-auto static place-items-center">
      <!-- Logo and close -->
      <div class="flex items-center w-full px-6 py-4 h-14">
        <NuxtLink to="/">
          <img src="@/assets/jbuglogo.png" alt="" class="h-8 max-h-full max-w-full object-contain" />
        </NuxtLink>
        <button @click="closeDrawer" class="ml-auto">
          <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
            />
          </svg>
        </button>
      </div>
      <div class="link-item">
        <NuxtLink to="/" class="mx-2 font-bold clr-text-1">HOME</NuxtLink>
      </div>
      <div class="link-item">
        <NuxtLink to="/about" class="mx-2 font-bold clr-text-1">ABOUT US</NuxtLink>
      </div>
      <div class="link-item">
        <NuxtLink to="/shop" class="mx-2 font-bold clr-text-1">SHOP</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const closeDrawer = () => {
  console.log('closing drawer!')
  drawerOpen().value = false
}
</script>

<style scoped>
.sidebar {
  min-width: 256px;
}

.sticky-sidebar {
  @apply lg:!sticky lg:!left-0 lg:!top-0;
}

.fixed-sidebar {
  @apply fixed;
}

.link-item {
  @apply px-4 pt-2 w-full;
}
</style>
