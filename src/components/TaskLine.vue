<template>
  <div
    v-if="task != null"
    @click.prevent="edit"
    :style="{
      backgroundColor: task.style.color.value,
      height: task.style.size - 5 + 'px',
      top: task.style.top + 2 + 'px',
    }"
    class="w-10/12 absolute rounded z-1 rounded-lg mx-2 flex flex-wrap cursor-pointer"
  >
    <h3 class="ml-4 mt-1 text-lg text-slate-100">
      {{ task.title }}
    </h3>
    <p class="ml-auto mt-1 mr-4 text-slate-100">
      Time {{ task.start_time.value }}-{{ task.end_time.value }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import {useTaskStore} from '@/stores/task'
  // props
  const props = defineProps(['task'])
  //
  // state
  const task = ref(props.task)
  //
  // pinia store
  let taskStore = useTaskStore()
  //
  // event
  const edit = () => {
    taskStore.updateTask(task.value.id)
  }
  //
</script>
