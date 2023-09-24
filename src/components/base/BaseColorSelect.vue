<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <p class="text-slate-500 font-semibold text-sm my-1 ml-1">{{ label }}</p>
    <div
      class="selected block w-14 rounded-md border-0 text-gray-900 shadow-sm ring-1 hover:bg-slate-100 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-300 sm:text-sm sm:leading-6"
      :class="{open: open}"
      @click="open = !open"
    >
      <input class="selected-input" readonly :value="modelValue" />
      <div
        class="w-5 h-5 p-2 border border-slate-600 rounded-full"
        :style="{backgroundColor: modelValue.value}"
      ></div>
    </div>
    <div
      class="items bg-slate-100 ring-1 ring-inset ring-gray-300"
      :class="{selectHide: !open}"
    >
      <div
        class="item block w-full h-full hover:bg-slate-200 text-gray-900 shadow-sm placeholder:text-gray-700 sm:text-sm sm:leading-6"
        v-for="(option, i) of options"
        :key="i"
        @click.prevent="click(option)"
      >
        <div
          class="w-5 h-5 border border-slate-600 rounded-full"
          :style="{backgroundColor: option.value}"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {onMounted, ref} from 'vue'
  const emit = defineEmits(['input', 'update:modelValue'])

  // props
  const props = defineProps({
    tabindex: {type: Number, required: false, default: 0},
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: Object,
      default: {
        name: 'blue',
        value: '#3b82f6',
      },
    },
  })
  //
  // state
  const options: any = ref([
    {name: 'blue', value: '#3b82f6'},
    {name: 'red', value: '#dc2626'},
    {name: 'green', value: '#22c55e'},
    {name: 'lime', value: '#a3e635'},
    {name: 'yellow', value: '#fde047'},
  ])
  const selected = ref(options.length > 0 ? options[0] : null)
  const open = ref(false)
  //
  // click event handler
  const click = (option: any): any => {
    selected.value = option
    open.value = false
    emit('update:modelValue', option)
  }
  //
  // onMounted hook
  onMounted(() => {
    emit('update:modelValue', props.modelValue)
  })
  //
</script>
<style scoped>
  .selected-input {
    display: none;
  }
  .custom-select {
    position: relative;
    width: 57px;
    text-align: left;
    outline: none;
    height: auto;
    line-height: auto;
  }
  .selected {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
  }
  .selectHide {
    display: none;
  }
</style>
