<template>
  <div class="w-64 relative">
    <VueDatePicker
      inline
      auto-apply
      :model-value="date"
      @update:model-value="update"
    ></VueDatePicker>
  </div>
</template>
<script setup lang="ts">
import { useDate } from '@/composables/date.ts'
const { update, date } = useDate()
</script>
