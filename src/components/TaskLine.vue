<template>
  <div
    class="w-10/12 absolute rounded z-1 rounded-lg mx-2 flex flex-wrap"
    :class="[props.task.style.color]"
    :style="{
      height: props.task.style.size + 'px',
      top: props.task.style.top + 'px',
    }"
  >
    <h3 class="ml-4">
      {{ props.task.title !== null ? props.task.title : 'no title' }}
    </h3>
    <p class="ml-4 text-slate-600">
      {{ props.task.time_and_date.start_time.value }}-{{
        props.task.time_and_date.end_time.value
      }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import { type PropType } from 'vue'
  import { Task } from '@/types/storetypes'
  const props = defineProps({
    task: {
      type: Object,
      required: true,
    },
  })
</script>
