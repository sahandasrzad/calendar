<template>
  <trans-fade>
    <div
      v-show="switchDay"
      class="timeline-container top-0 right-0 bottom-10 relative border-t overscroll-y-auto border-slate-300 basis-10/12"
    >
      <scroll-bar>
        <div class="w-1/12">
          <div class="h-10 line-hour mr-10" v-for="i in 24" :key="i">
            <span class="line-hour-span text-sm">{{ i }} am</span>
          </div>
        </div>
        <div class="w-11/12 mr-10">
          <moment-detector v-show="isToday"></moment-detector>
          <space-line v-for="i in 24" :key="i" :indexLine="i"> </space-line>
          <task-line v-if="taskStore.task != null" :task="taskStore.task"></task-line>
          <task-line v-for="item in allTasks" :key="item.id" :task="item"></task-line>
        </div>
      </scroll-bar>
    </div>
  </trans-fade>
</template>

<script setup lang="ts">
  import TransFade from '@/components/transition/TransFade.vue'
  import ScrollBar from '@/components/scrollbar/ScrollBar.vue'
  import MomentDetector from '@/components/MomentDetector.vue'
  import TaskLine from '@/components/TaskLine.vue'
  import SpaceLine from '@/components/SpaceLine.vue'
  import {ref, watch, onMounted} from 'vue'
  import {storeToRefs} from 'pinia'
  import {useTaskStore} from '@/stores/task'
  import {useDateStore} from '@/stores/date'
  // pinia store
  const taskStore = useTaskStore()
  const dateStore = useDateStore()
  //
  // state
  const switchDay = ref(false)
  const isToday = ref(true)
  const allTasks = ref()
  const {getTasks} = storeToRefs(taskStore)
  //
  // onMounted hook
  onMounted(() => {
    switchDay.value = true
    allTasks.value = getTasks.value
  })
  //
  // watch
  watch(
    () => getTasks.value,
    newVal => {
      allTasks.value = []
      setTimeout(() => {
        allTasks.value = newVal
      }, 400)
    },
  )
  watch(
    () => dateStore.day,
    () => {
      switchDay.value = false
      const date = new Date()
      const today = date.getDate()
      setTimeout(() => {
        switchDay.value = true
        today === dateStore.day ? (isToday.value = true) : (isToday.value = false)
      }, 400)
    },
  )
  //
</script>
<style scoped>
  .line-hour-span {
    display: block;
    position: relative;
    top: 32px;
    left: 35px;
  }
</style>
