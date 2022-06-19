<template>
  <div></div>
</template>

<script setup lang="ts">
const route = useRoute()
console.log(`id: ${route.params.id}, name: ${route.params.name}`)
</script>

<style scoped></style>
