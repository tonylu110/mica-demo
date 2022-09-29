<template>
  <div 
    class="fold-item" 
    :style="{backgroundColor: name === routeName ? '#00000015' : ''}"
    @click="toRoute"
  >
    <span class="material-icons">{{ icon }}</span>
    <span class="title">{{ title }}</span>
    <span v-if="menuOpen" class="material-icons show-more" @click.stop="open = !open">{{ open && menuOpen ? 'expand_less' : 'expand_more' }}</span>
    <div v-if="name === routeName" class="item-dot"></div>
  </div>
  <div class="more-item" :style="{height: open && menuOpen ? 'auto' : '0px'}">
    <slot/>
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
  name: String,
  open: {
    default: false,
    type: Boolean
  }
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

const open = ref(false)
const menuOpen = ref(true)

watchEffect(() =>{
  menuOpen.value = props.open
})
</script>

<style scoped>
.fold-item {
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

.more-item {
  width: 100%;
  margin-left: 10px;
  overflow: hidden;
  transition: height .3s;
}

:deep(.item) {
  padding-left: 35px;
  width: calc(100% - 52px);
}
:deep(.item:nth-child(2)) {
  margin-top: 0px;
}
:deep(.item-dot) {
  left: 27px;
}

.fold-item:nth-child(2) {
  margin-top: 2.5rem;
}
.fold-item:hover {
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

.show-more {
  position: absolute;
  right: 0;
}

@media (prefers-color-scheme: light) {
  span {
    color: black;
  }
}
</style>