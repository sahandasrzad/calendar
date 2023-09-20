<template>
  <div
    class="timeline-container top-0 right-0 bottom-0 flex-auto relative flex flex-row border-t overscroll-y-auto border-slate-300"
  >
    <perfect-scrollbar
      class="w-full flex flex-row mr-48"
      :class="{
        'shadow-[inset_0_1px_1px_0_rgba(0,0,0,.14),inset_0_2px_1px_-1px_rgba(0,0,0,.12)]':
          isScrolled,
      }"
      :options="options"
      @ps-scroll-y="onScroll"
      ref="scrollbar"
    >
      <div class="w-1/12">
        <div class="h-10 line-hour mr-10" v-for="i in 24" :key="i">
          <span class="line-hour-span text-sm">{{ i }} am</span>
        </div>
      </div>
      <div class="w-11/12 mr-10">
        <space-line v-for="i in 24" :key="i" :index="i"></space-line>

        <task-line
          v-if="taskStore.task != null"
          :task="taskStore.task"
        ></task-line>
        <task-line
          v-if="taskStore.tasks.length > 0"
          v-for="(item, i) in taskStore.tasks"
          :key="i"
          :task="item"
        ></task-line>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script setup>
  import { useTaskStore } from '@/stores/task.ts'
  import TaskLine from '@/components/TaskLine.vue'
  import { ref, watch } from 'vue'
  import SpaceLine from '@/components/SpaceLine.vue'
  const options = {
    suppressScrollX: true,
    suppressScrollY: false,
    scrollingThreshold: 7000,
    wheelSpeed: 0.3,
  }
  const scrollbar = ref(null)
  const isScrolled = ref(false)
  const onScroll = event => {
    event.target.scrollTop > 50
      ? (isScrolled.value = true)
      : (isScrolled.value = false)
  }
  const taskStore = useTaskStore()
</script>
<style scoped>
  .line-hour-span {
    display: block;
    position: relative;
    top: 32px;
    left: 35px;
  }
  .ps {
    height: 600px;
  }
</style>
