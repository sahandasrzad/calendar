<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <p class="text-slate-500 font-semibold text-sm my-1 ml-1">{{ label }}</p>
    <div
      class="selected px-2 block w-full rounded-md border-0 py-1.5 hover:bg-slate-100 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6"
      :class="{ open: open }"
      @click="open = !open"
    >
      <input class="selected-input" readonly :value="modelValue" />{{
        modelValue
      }}
    </div>
    <div
      class="items bg-slate-100 ring-1 ring-inset ring-gray-300"
      :class="{ selectHide: !open }"
    >
      <div
        class="item px-2 block w-full py-1.5 text-gray-900 shadow-sm placeholder:text-gray-700 sm:text-sm sm:leading-6"
        v-for="(option, i) of options"
        :key="i"
        @click.prevent="click(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  const emit = defineEmits(['input', 'update:modelValue'])
  const props = defineProps({
    tabindex: { type: Number, required: false, default: 0 },
    options: {
      type: Array,
      default: ['not', 'daily', 'weekly'],
    },
    modelValue: { type: String },
    label: {
      type: String,
      default: '',
    },
  })
  const selected = ref(props.options.length > 0 ? props.options[0] : null)
  const open = ref(false)
  const click = (option: any): any => {
    selected.value = option
    open.value = false
    emit('update:modelValue', option)
  }
  onMounted(() => {
    emit('update:modelValue', props.modelValue)
  })
</script>
<style scoped>
  .selected-input {
    display: none;
  }
  .custom-select {
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
  }

  .selected:after {
    position: absolute;
    content: '';
    top: 22px;
    right: 10px;
    width: 0;
    height: 0;
  }

  .items {
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1000;
  }
  .item {
    z-index: 1000;
  }
  .selectHide {
    display: none;
  }
</style>
