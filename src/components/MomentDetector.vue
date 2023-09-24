<template>
  <div class="flex flex-row">
    <div class="dot" :style="{top: top + 'px'}"></div>
    <div class="line" :style="{top: top + 'px'}"></div>
  </div>
</template>
<script setup lang="ts">
  import {ref, onMounted} from 'vue'
  // state
  const top = ref(0)
  //
  // onMounted hook
  onMounted(() => {
    getTop()
    setInterval(() => {
      getTop()
    }, 10000)
  })
  //
  // evnet
  const getTop = () => {
    const date = new Date()
    const minute = date.getMinutes()
    const hour = date.getHours()
    top.value = hour * 40 + Math.floor((minute * 2) / 3)
  }
  //
</script>
<style scoped>
  .line {
    width: 100%;
    margin-left: 100px;
    position: absolute;
    z-index: 0;
    border-top: red solid 2px;
    left: 0;
    right: 0;
    pointer-events: none;
  }
  .dot {
    background: red;
    border-radius: 50%;
    content: '';
    position: absolute;
    height: 12px;
    margin-left: -6.5px;
    margin-top: -5px;
    width: 12px;
    z-index: 0;
  }
</style>
