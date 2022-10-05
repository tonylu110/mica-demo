<template>
  <div 
    :class="`button ${type} ${line ? 'line' : ''}`" 
    :style="{ borderRadius: round ? '1.5rem' : '' }"
  >
    <slot/>
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: String,
  round: {
    default: false,
    type: Boolean
  },
  line: {
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

.button.line {
  background-color: transparent;
  border: 2px solid #ffffff70;
}
.button.line:active {
  background-color: #00000015;
  border: 2px solid #ffffff90;
}

.primary {
  background-color: #3648DE;
  color: white;
}
.primary:active {
  background-color: #2f3cb8;
}
.primary.line {
  color: #3648DE;
  border: 2px solid #3648DE;
}
.primary.line:active {
  color: #2f3cb8;
  border: 2px solid #2f3cb8;
}

.error {
  background-color: #f00;
  color: white;
}
.error:active {
  background-color: #a00;
}
.error.line {
  color: #f00;
  border: 2px solid #f00;
}
.error.line:active {
  color: #a00;
  border: 2px solid #a00;
}

.warning {
  background-color: #ff0;
}
.warning:active {
  background-color: #dd0;
}
.warning.line {
  color: #ff0;
  border: 2px solid #ff0;
}
.warning.line:active {
  color: #dd0;
  border: 2px solid #dd0;
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