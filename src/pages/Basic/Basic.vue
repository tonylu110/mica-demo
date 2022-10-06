<template>
  <ScrollY>
    <span class="title">Basic Components</span>
    <div class="items">
      <ItemCard title="Buttons" @click="router.push({name: 'buttons'})"/>
    </div>
``</ScrollY>
</template>

<script setup lang="ts">
import ScrollY from '../../components/ScrollView/ScrollY.vue';
import { useRouter } from 'vue-router';
import ItemCard from '../../components/ItemCard/ItemCard.vue';

const router = useRouter()
</script>

<style scoped>
.title {
  margin-top: 40px;
  display: block;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}
.items {
  width: calc(100% - 80px);
  margin-left: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>