<template>
  <Button
    :type="type"
    :disabled="disabled"
    class="my-1 pointer-events-auto rounded-md px-3 py-2 text-sm font-semibold leading-5"
    :class="`bg-${bg_color}-600 hover:bg-${bg_color}-500 text-${text_color}`"
  >
    {{ text }} <span v-if="isIcon"> <i :class="`${icon}`"></i> </span>
  </Button>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  const props = defineProps({
    type: String,
    text: String,
    text_color: String,
    bg_color: String,
    icon: String,
    disabled: Boolean,
  })
  let isIcon = ref(false)
  const icon = computed({
    get() {
      icon ? (isIcon.value = true) : (isIcon.value = false)
    },
    set() {},
  })
</script>
