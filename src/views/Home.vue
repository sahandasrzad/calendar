<template>
  <div class="container flex relative m-10 h-screen">
    <date-selector></date-selector>
    <time-line></time-line>
    <task-modal></task-modal>
  </div>
</template>

<script setup lang="ts">
  import DateSelector from '@/components/DateSelector.vue'
  import TimeLine from '@/components/TimeLine.vue'
  import TaskModal from '@/components/TaskModal.vue'
  import { ref } from 'vue'
</script>
<style>
  body {
    overflow-y: hidden;
    overflow-x: hidden;
  }
</style>
