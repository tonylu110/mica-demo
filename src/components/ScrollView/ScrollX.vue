<template>
  <PerfectScrollbar class="scroll-x">
    <div>
      <slot/>
    </div>
  </PerfectScrollbar>
</template>

<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
</script>

<style scoped>
.scroll-x > div {
  display: flex;
  flex-direction: row;
  width: calc(100% - 80px);
  margin-left: 40px;
  overflow-x: scroll;
}
</style>