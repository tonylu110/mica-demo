<template>
  <ScrollY>
    <span class="title">Buttons</span>
    <div class="box">
      Basic Button
      <div class="basic">
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="error">Error</Button>
        <Button type="warning">Warning</Button>
      </div>
      <div class="code">
        <um-note :codes="basicCode"/>
      </div>
    </div>
    <div class="box">
      Round Button
      <div class="basic">
        <Button :round="true">Default</Button>
        <Button type="primary" :round="true">Primary</Button>
        <Button type="error" :round="true">Error</Button>
        <Button type="warning" :round="true">Warning</Button>
      </div>
      <div class="code">
        <um-note :codes="roundCode"/>
      </div>
    </div>
    <div class="box">
      Line Button
      <div class="basic">
        <Button :line="true">Default</Button>
        <Button type="primary" :line="true">Primary</Button>
        <Button type="error" :line="true">Error</Button>
        <Button type="warning" :line="true">Warning</Button>
      </div>
      <div class="code">
        <um-note :codes="lineCode"/>
      </div>
    </div>
  </ScrollY>
</template>

<script setup lang="ts">
import ScrollY from '../components/ScrollView/ScrollY.vue';
import Button from '../components/Button/Button.vue';

const basicCode = [
  {
    language:  'html',
    code:  `<div class="basic">
  <Button>Default</Button>
  <Button type="primary">Primary</Button>
  <Button type="error">Error</Button>
  <Button type="warning">Warning</Button>
</div>`
  },
  {
    language:  'css',
    code:  `.basic {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: calc(100% - 80px);
  margin-left: 40px;
}`
  },
]

const roundCode = [
  {
    language:  'html',
    code:  `<div class="basic">
  <Button :round="true">Default</Button>
  <Button type="primary" :round="true">Primary</Button>
  <Button type="error" :round="true">Error</Button>
  <Button type="warning" :round="true">Warning</Button>
</div>`
  },
  {
    language:  'css',
    code:  `.basic {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: calc(100% - 80px);
  margin-left: 40px;
}`
  },
]

const lineCode = [
  {
    language:  'html',
    code:  `<div class="basic">
  <Button :line="true">Default</Button>
  <Button type="primary" :line="true">Primary</Button>
  <Button type="error" :line="true">Error</Button>
  <Button type="warning" :line="true">Warning</Button>
</div>`
  },
  {
    language:  'css',
    code:  `.basic {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: calc(100% - 80px);
  margin-left: 40px;
}`
  },
]
</script>

<style scoped>
.title {
  margin-top: 40px;
  display: block;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}

.box {
  background-color: #ffffff50;
  border-radius: 8px;
  width: calc(100% - 100px);
  margin-left: 40px;
  padding: 10px;
  text-align: left;
  margin-bottom: 15px;
}

.basic {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.code {
  margin-top: 10px;
}

@media (prefers-color-scheme: dark) {
  .box {
    background-color: #33333370;
  }
}
</style>