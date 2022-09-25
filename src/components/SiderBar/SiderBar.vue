<template>
  <div class="menu" :style="{width: menuOpen ? '' : 'calc(2rem + 16px)'}">
    <div class="menu-button" @click="menuChange">
      <span class="material-icons">menu</span>
    </div>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const emits = defineEmits<{
  (e: 'menuChange', menuOpen: boolean): void
}>()

const menuOpen = ref(true)
const menuChange = () => {
  menuOpen.value = !menuOpen.value
  emits('menuChange', menuOpen.value)
}
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
  transition: width .3s;
}

.menu-button {
  position: absolute;
  left: 5px;
  width: calc(2rem + 6px);
  height: calc(2rem + 6px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  user-select: none;
}
.menu-button:hover {
  background-color: #00000010;
  user-select: none;
}
</style>