<template>
  <div class="ctrl-buttons" v-if="!isMac">
    <div class="button" @click="minWindow">
      <span class="material-icons">horizontal_rule</span>
    </div>
    <div class="button" @click="maxWindow"> 
      <span class="material-icons">check_box_outline_blank</span>
    </div>
    <div class="button close" @click="closeWindow">
      <span class="material-icons">close</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const isMac = navigator.userAgent.indexOf('Mac')>=0
const ipcRenderer = require('electron').ipcRenderer
const closeWindow = () => {
  ipcRenderer.send("window-close")
}

const minWindow = () => {
  ipcRenderer.send("window-min")
}

const maxWindow = () => {
  ipcRenderer.send("window-max")
}
</script>

<style scoped>
.ctrl-buttons {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  -webkit-app-region: no-drag;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
}
.button:hover {
  background-color: #00000020;
}
.close:hover {
  background-color: #f00;
}
.close:hover > .material-icons {
  color: white;
}

.material-icons {
  color: white;
  user-select: none;
  font-size: 16px;
}

@media (prefers-color-scheme: light) {
  .material-icons {
    color: black;
  }
}
</style>