<script setup lang="ts">
import WindowButton from './components/WindowButton/WindowButton.vue';
import SiderBar from './components/SiderBar/SiderBar.vue';
import SiderItem from './components/SiderBar/Item/Item.vue';
</script>

<template>
  <WindowButton />
  <SiderBar>
    <SiderItem title="Home"/>
    <SiderItem icon="info" title="Info"/>
  </SiderBar>
</template>

<style scoped>

</style>
