<template>
  <div class="relative basis-2/12">
    <VueDatePicker
      inline
      auto-apply
      :model-value="date"
      @update:model-value="update"
    ></VueDatePicker>
  </div>
</template>
<script setup lang="ts">
  import {useDate} from '@/composables/date'
  const {update, date} = useDate()
</script>
