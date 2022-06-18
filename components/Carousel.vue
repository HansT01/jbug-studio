<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: ['msg'],
})
</script>

<style lang="scss" scoped></style>
