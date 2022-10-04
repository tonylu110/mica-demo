<template>
  <div :class="`button ${type}`" :style="{ borderRadius: round ? '1.5rem' : '' }">
    <slot/>
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: String,
  round: {
    default: false,
    type: Boolean
  }
})
</script>

<style scoped>
.button {
  background-color: #ffffff70;
  user-select: none;
  padding: 10px 20px;
  font-weight: bold;
  margin: 3px;
  border-radius: 5px;
  cursor: pointer;
  min-width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button:active {
  background-color: #ffffff90;
}

.primary {
  background-color: #3648DE;
  color: white;
}
.primary:active {
  background-color: #2f3cb8;
}

.error {
  background-color: #f00;
  color: white;
}
.error:active {
  background-color: #a00;
}

.warning {
  background-color: #ff0;
}
.warning:active {
  background-color: #dd0;
}

@media (prefers-color-scheme: dark) {
  .undefined {
    background-color: #33333370;
  }
  .undefined:active {
    background-color: #33333390;
  }
  .warning {
    color: black;
  }
}
</style>