<template>
  <div class="item-card">
    <img :src="img" alt="">
    <span class="title">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  img: {
    default: './images/win11.jpeg',
    type: String
  },
  title :{
    default: 'title',
    type: String
  }
})
</script>

<style scoped>
.item-card {
  background-color: #ffffff70;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
  width: 270px;
  overflow: hidden;
  border-radius: 8px;
  margin: 10px;
  padding-right: 15px;
  border: 1px solid #dddddd60;
}

.item-card:hover {
  box-shadow: 0 1px 5px #00000035;
}

img {
  margin-right: 15px;
  height: 70px;
  width: 70px;
  object-fit: cover;
}

.title {
  font-weight: bold;
}

@media (prefers-color-scheme: dark) {
  .item-card {
    background-color: #33333355;
    border: 1px solid #33333340;
  }
}
</style>