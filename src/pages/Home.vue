<template>
  <ScrollY>
    <img src="/images/win11.jpeg" alt="" class="title-img">
    <ScrollX>
      <Card img="./images/win11.jpeg"/>
      <Card img="./images/win11.jpeg"/>
      <Card img="./images/win11.jpeg"/>
      <Card img="./images/win11.jpeg"/>
      <Card img="./images/win11.jpeg"/>
      <Card img="./images/win11.jpeg"/>
      <Card img="./images/win11.jpeg"/>
    </ScrollX>
    <ScrollX>
      <Card img="./images/win11.jpeg"/>
      <Card img="./images/win11.jpeg"/>
      <Card img="./images/win11.jpeg"/>
      <Card img="./images/win11.jpeg"/>
      <Card img="./images/win11.jpeg"/>
      <Card img="./images/win11.jpeg"/>
      <Card img="./images/win11.jpeg"/>
    </ScrollX>
  </ScrollY>
</template>

<script setup lang="ts">
import Card from '../components/Card/Card.vue'
import ScrollY from '../components/ScrollView/ScrollY.vue';
import ScrollX from '../components/ScrollView/ScrollX.vue';
</script>

<style scoped>
.title-img {
  width: calc(100% - 80px);
  margin-top: 40px;
  margin-bottom: 10px;
  border-radius: 8px;
  height: 300px;
  object-fit: cover;
}
</style>