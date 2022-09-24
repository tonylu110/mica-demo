<template>
  <div class="menu">
    <slot/>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.menu {
  width: 270px;
  height: calc(100vh - 40px);
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  flex-direction: column;
  align-items: center;
}
</style>