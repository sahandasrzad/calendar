<template>
  <div class="flex flex-wrap relative m-10 h-auto">
    <nav-line></nav-line>
    <div class="flex flex-row w-full">
      <date-selector></date-selector>
      <time-line></time-line>
    </div>
    <task-modal></task-modal>
  </div>
</template>

<script setup lang="ts">
  import DateSelector from '@/components/DateSelector.vue'
  import TimeLine from '@/components/TimeLine.vue'
  import TaskModal from '@/components/TaskModal.vue'
  import NavLine from '@/components/NavLine.vue'
</script>
<style>
  body {
    overflow-y: hidden;
    overflow-x: hidden;
  }
</style>
