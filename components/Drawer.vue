<template>
  <div class="sidebar sticky-sidebar static-sidebar h-screen overflow-y-scroll z-50 bg-red-500">
    <!-- Container > Content -->
    <div class="flex flex-col z-50 h-auto static">
      <Square class="bg-blue-400" />
      <Square class="bg-purple-400" />
      <Square class="bg-pink-400" />
      <Square class="bg-red-400" />
      <Square class="bg-blue-400" />
      <Square class="bg-purple-400" />
      <Square class="bg-pink-400" />
      <Square class="bg-red-400" />
      <Square class="bg-blue-400" />
      <Square class="bg-purple-400" />
      <Square class="bg-pink-400" />
      <Square class="bg-red-400" />
      <Square class="bg-blue-400" />
      <Square class="bg-purple-400" />
      <Square class="bg-pink-400" />
      <Square class="bg-red-400" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.sidebar {
  min-width: 256px;
}

.sticky-sidebar {
  @apply lg:!sticky lg:!left-0 lg:!top-0;
}

.static-sidebar {
  @apply fixed;
}
</style>
