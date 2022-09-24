<template>
  <div class="item">
    <span class="material-icons">{{ icon }}</span>
    <span class="title">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon :{
    default: 'home',
    type: String
  },
  title: {
    default: 'title',
    type: String
  },
  routeName: {
    
  }
})
</script>

<style scoped>
.item {
  width: calc(100% - 18px);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 7px;
  border-radius: 5px;
  user-select: none;
  align-items: center;
}
.item:hover {
  background-color: #00000010;
}

.material-icons {
  margin-right: 7px;
}

.title {
  font-weight: bold;
}
</style>