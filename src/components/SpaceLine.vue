<template>
  <div
    @click.prevent="initTask"
    role="button"
    class="line-item h-10 w-full border-l border-slate-400"
  ></div>
</template>

<script setup lang="ts">
  import {useTaskStore} from '../stores/task'
  // props
  const props = defineProps(['indexLine'])
  //
  // pinia store
  const taskStore = useTaskStore()
  //
  // event
  const initTask = () => {
    taskStore.createTask(props.indexLine)
  }
  //
</script>

<style scoped>
  .line-item::after {
    content: '';
    border-bottom: #94a3b8 1px solid;
    position: absolute;
    width: 100%;
    margin-top: -1px;
    z-index: -3;
  }
</style>
