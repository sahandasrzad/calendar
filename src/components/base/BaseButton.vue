<template>
  <Button
    :type="type"
    :disabled="disabled"
    class="m-1 pointer-events-auto rounded-md px-4 py-2 text-sm font-semibold leading-5"
    :class="[
      `text-${txtColor}`,
      { 'bg-blue-600 hover:bg-blue-400': primary },
      { 'bg-green-500 hover:bg-green-300': success },
      { 'bg-red-500 hover:bg-red-300': error },
      { 'bg-slate-200 hover:bg-slate-100': white },
    ]"
  >
    <slot></slot> <span v-if="isIcon"> <i :class="`${icon}`"></i> </span>
  </Button>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  const props = defineProps({
    type: {
      type: String,
      default: 'button',
    },
    text: {
      type: String,
      default: '',
    },
    txtColor: String,
    bgColor: {
      type: String,
      default: 'primary',
    },
    icon: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  })
  const primary = computed(() => {
    return props.bgColor === 'primary'
  })
  const success = computed(() => {
    return props.bgColor === 'success'
  })
  const error = computed(() => {
    return props.bgColor === 'error'
  })
  const white = computed(() => {
    return props.bgColor === 'white'
  })
  let isIcon = ref(false)
  const icon = computed({
    get() {
      icon ? (isIcon.value = true) : (isIcon.value = false)
    },
    set() {},
  })
</script>
