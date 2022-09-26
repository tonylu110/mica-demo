<template>
  <perfect-scrollbar class="list">
    <slot/>
  </perfect-scrollbar>
</template>

<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
</script>

<style scoped>
.list {
  height: 100%;
  overflow-y: scroll;
}
</style>