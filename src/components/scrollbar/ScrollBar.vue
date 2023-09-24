<template>
  <perfect-scrollbar
    ref="scrollbar"
    :options="options"
    @ps-scroll-y="onScroll"
    :class="{
      'shadow-[inset_0_1px_1px_0_rgba(0,0,0,.14),inset_0_2px_1px_-1px_rgba(0,0,0,.12)]':
        isScrolled,
    }"
    class="w-full flex flex-row mr-48"
  >
    <slot></slot>
  </perfect-scrollbar>
</template>

<script setup lang="ts">
  import {ref, watch, onMounted, nextTick} from 'vue'
  // state
  const options = ref({
    minScrollbarLength: 4,
    suppressScrollX: true,
    suppressScrollY: false,
    scrollingThreshold: 7000,
    wheelSpeed: 0.3,
  })
  const scrollbar = ref()
  const isScrolled = ref(false)
  //
  // onMounted Hook
  onMounted(() => {
    getTop()
  })
  //
  // init method
  const getTop = () => {
    nextTick(() => {
      const date = new Date()
      const minute = date.getMinutes()
      const hour = date.getHours()
      scrollbar.value.ps.element.scrollTop = hour * 20
    })
  }
  //
  // onScroll event handler
  const onScroll = (event: {target: {scrollTop: number}}) => {
    event.target.scrollTop > 50 ? (isScrolled.value = true) : (isScrolled.value = false)
  }
  //
</script>
<style scoped>
  .ps {
    height: 500px;
  }
</style>
