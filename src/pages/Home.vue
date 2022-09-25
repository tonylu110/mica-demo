<template>
  <perfect-scrollbar class="list">
    <img src="/images/win11.jpeg" alt="" class="title-img">
    <perfect-scrollber class="scroll-x">
      <div>
        <Card img="./images/win11.jpeg"/>
        <Card img="./images/win11.jpeg"/>
        <Card img="./images/win11.jpeg"/>
        <Card img="./images/win11.jpeg"/>
        <Card img="./images/win11.jpeg"/>
        <Card img="./images/win11.jpeg"/>
        <Card img="./images/win11.jpeg"/>
      </div>
    </perfect-scrollber>
    <perfect-scrollber class="scroll-x">
      <div>
        <Card img="./images/win11.jpeg"/>
        <Card img="./images/win11.jpeg"/>
        <Card img="./images/win11.jpeg"/>
        <Card img="./images/win11.jpeg"/>
        <Card img="./images/win11.jpeg"/>
        <Card img="./images/win11.jpeg"/>
        <Card img="./images/win11.jpeg"/>
      </div>
    </perfect-scrollber>
  </perfect-scrollbar>
</template>

<script setup lang="ts">
import Card from '../components/Card/Card.vue'
</script>

<style scoped>

.list {
  height: 100%;
  overflow-y: scroll;
}
.scroll-x > div {
  display: flex;
  flex-direction: row;
  width: calc(100% - 80px);
  margin-left: 40px;
  overflow-x: scroll;
}
.title-img {
  width: calc(100% - 80px);
  margin-top: 40px;
  margin-bottom: 10px;
  border-radius: 8px;
  height: 300px;
  object-fit: cover;
}
</style>