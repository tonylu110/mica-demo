<script setup lang="ts">
import WindowButton from './components/WindowButton/WindowButton.vue';
import SiderBar from './components/SiderBar/SiderBar.vue';
import SiderItem from './components/SiderBar/Item/Item.vue';
import { ref } from 'vue';

const menuOpen = ref(true)
</script>

<template>
  <WindowButton />
  <SiderBar @menuChange="(menu) => menuOpen = menu">
    <SiderItem title="Home" name="home"/>
    <SiderItem icon="info" title="Info" name="info"/>
  </SiderBar>
  <div class="page" :style="{width: menuOpen ? '' : 'calc(100vw - (2rem + 16px))'}">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.page {
  background-color: #ffffff55;
  height: calc(100vh - 40px);
  width: calc(100vw - 270px);
  position: fixed;
  right: 0;
  bottom: 0;
  border-radius: 10px 0 0 0 ;
  border-top: 1px solid #dddddd60;
  border-left: 1px solid #dddddd60;
  transition: width .3s;
}

@media (prefers-color-scheme: dark) {
  .page {
    background-color: #33333355;
    border-top: 1px solid #33333340;
    border-left: 1px solid #33333340;
  }
}
</style>
