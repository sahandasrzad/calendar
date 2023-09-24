<template>
  <div class="w-full h-24 flex flex-wrap justify-start items-center px-10">
    <div class="bg-blue-500 w-20 h-20 rounded-full flex justify-center items-center">
      <span class="text-2xl text-white">{{ day }}</span>
    </div>
  </div>
</template>
<script setup>
  import {ref, watch} from 'vue'
  import {useDateStore} from '@/stores/date.ts'
  // pinia store
  const dateStore = useDateStore()
  //
  // state
  const day = ref(dateStore.day)
  //
  // watch
  watch(
    () => dateStore.day,
    (newVal, oldVal) => {
      day.value = newVal
    },
  )
  //
</script>
