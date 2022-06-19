<template>
  <div :class="{ hidden: !drawerOpen().value }" class="flex-col clr-bg-1">
    <!-- WHAT IS THIS EVEN FOR??? -->
    <div class="shade lg:hidden z-40 h-screen md:h-full"></div>

    <div class="drawer flex-grow lg:static lg:h-auto fixed left-0 top-0 z-50 h-screen md:h-full">
      <div class="lg:top-0 lg:sticky flex flex-col overflow-y-auto overscroll-contain h-screen">
        <div class="mt-64">HEYHEYHEYHEYHEY</div>
        <div class="mt-64">{{ drawerOpen() }}</div>
        <div class="mt-64">HEY</div>
        <div class="mt-64">HEY</div>
        <div class="mt-64">HEY</div>
        <div class="mt-64">HEY</div>
        <div class="mt-64">HEY</div>
        <div class="mt-64">HEY</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const drawer = drawerOpen()
</script>

<style scoped></style>
