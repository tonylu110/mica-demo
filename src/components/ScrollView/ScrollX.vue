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
::-webkit-scrollbar {
  display: none;
}
.scroll-x > div {
  display: flex;
  flex-direction: row;
}

.scroll-x {
  width: calc(100% - 80px);
  margin-left: 40px;
}
</style>