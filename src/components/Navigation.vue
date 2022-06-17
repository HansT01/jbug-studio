<template>
  <div class="container">
    <div class="start">
      <router-link to="/">
        <img src="@/assets/jbuglogo.png" alt="" class="logo" />
      </router-link>
      <router-link to="/about">Home</router-link>
      <router-link to="/">Home</router-link>
    </div>
    <div class="center"></div>
    <div class="end"></div>
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

<style scoped></style>
