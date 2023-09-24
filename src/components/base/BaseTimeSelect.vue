<template>
  <div class="custom-select sm:text-sm mx-1" :tabindex="tabindex" @blur="open = false">
    <p v-if="label" class="text-slate-500 font-semibold text-sm my-1 ml-1">
      {{ label }}
    </p>
    <div
      class="sm:text-sm selected px-2 block w-full ring-1 ring-slate-300 flex justify-center rounded-md border-0 text-gray-900 shadow-sm hover:bg-slate-100 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-300 leading-9"
      :class="{open: open}"
      @click="open = !open"
    >
      <input class="selected-input" readonly :value="modelValue" />
      <span>{{ selected.value }}</span>
    </div>
    <div
      class="items bg-slate-100 ring-1 w-2/12 ring-inset ring-gray-300"
      :class="{selectHide: !open}"
    >
      <div
        class="item px-2 block w-full py-1.5 text-gray-900 shadow-sm placeholder:text-gray-700 sm:text-sm sm:leading-6"
        v-for="(option, i) of options"
        :key="i"
        @click.prevent="click(option)"
      >
        {{ option.text }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {onMounted, ref, computed} from 'vue'
  const emit = defineEmits(['input', 'update:modelValue'])
  // props
  const props = defineProps({
    tabindex: {type: Number, required: false, default: 0},
    modelValue: {
      type: Object,
      default: null,
    },
    label: {
      type: String,
    },
  })
  //
  // computed
  const options = computed(() => {
    const arr = []
    for (let i = 0; i < 24; i++) {
      arr.push({text: i < 10 ? `0${i}` : i, value: i})
    }
    return arr
  })
  //
  // state
  const selected = ref(props.modelValue)
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
    min-width: 50px;
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
    max-height: 200px;
    min-width: 80px;
    overflow-y: auto;
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
