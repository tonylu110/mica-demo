<template>
  <div class="card" :style="{minWidth: width}">
    <img v-if="img" :src="img" alt="" :style="{width: width, height: width}">
    <span class="title">{{ title }}</span>
    <span class="msg">{{ msg }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  img: String,
  title: {
    default: 'title',
    type: String
  },
  msg: {
    default: "message",
    type: String
  },
  width: {
    default: '130px',
    type: String
  }
})
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 0;
  text-align: left;
  background-color: #ffffff70;
  border-radius: 8px;
  overflow: hidden;
  margin: 5px;
  border: 1px solid #dddddd60;
  user-select: none;
}

.card:last-child {
  margin-right: 0;
}

.card:first-child {
  margin-left: 0;
}

img {
  object-fit: cover;
}

.title {
  font-weight: bold;
  font-size: 18px;
  max-width: calc(100% - 10px);
  margin-left: 5px;
  margin-top: 5px;
}

.msg {
  max-width: calc(100% - 10px);
  margin-left: 5px;
  margin-bottom: 5px;
}

.card:hover {
  box-shadow: 0 1px 5px #00000035;
}

@media (prefers-color-scheme: dark) {
  .card {
    background-color: #33333355;
    border: 1px solid #33333340;
  }
}
</style>