<template>
  <ScrollY>
    <span class="title">Fold</span>
    <div class="items">
      <ItemCard title="page1" @click="router.push({name: 'page1'})"/>
      <ItemCard title="page2" @click="router.push({name: 'page2'})"/>
    </div>
  </ScrollY>
</template>

<script setup lang="ts">
import ItemCard from '../../components/ItemCard/ItemCard.vue';
import ScrollY from '../../components/ScrollView/ScrollY.vue';
import { useRouter } from 'vue-router';

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