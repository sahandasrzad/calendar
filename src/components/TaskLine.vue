<template>
  <div
    v-if="task != null"
    @click.prevent="edit"
    class="w-10/12 absolute rounded z-1 rounded-lg mx-2 flex flex-wrap cursor-pointer"
    :style="{
      backgroundColor: task.style.color.value,
      height: task.style.size - 5 + 'px',
      top: task.style.top + 2 + 'px',
    }"
  >
    <h3 class="ml-4">
      {{ task.title }}
    </h3>
    <p class="ml-4 text-slate-600">
      {{ task.start_time.value }}-{{ task.end_time.value }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useTaskStore } from '@/stores/task'
  const props = defineProps(['task'])
  const task = ref(props.task)
  let taskStore = useTaskStore()
  const edit = () => {
    taskStore.updateTask(task.value.id)
  }
</script>
