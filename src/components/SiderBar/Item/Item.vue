<template>
  <div 
    class="item" 
    :style="{backgroundColor: name === routeName ? '#00000015' : ''}"
    @click="toRoute"
  >
    <span class="material-icons">{{ icon }}</span>
    <span class="title">{{ title }}</span>
    <div v-if="name === routeName" class="item-dot"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router'
const props = defineProps({
  icon :{
    default: 'home',
    type: String
  },
  title: {
    default: 'title',
    type: String
  },
  name: String
})

const route = useRoute()
const routeName = ref('')

watchEffect(() => {
  routeName.value = route.name as unknown as string
})

const router = useRouter()
const toRoute = () => {
  router.push({
    name: props.name
  })
}
</script>

<style scoped>
.item {
  width: calc(100% - 24px);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 7px;
  border-radius: 5px;
  user-select: none;
  align-items: center;
  margin-bottom: 3px;
  position: relative;
  overflow: hidden;
}

.item:nth-child(2) {
  margin-top: 2.5rem;
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

span {
  color: white;
}

.item-dot {
  background-color: #3648DE;
  height: 1rem;
  position: absolute;
  left: 0;
  width: 3px;
  border-radius: 3px;
}

@media (prefers-color-scheme: light) {
  span {
    color: black;
  }
}
</style>