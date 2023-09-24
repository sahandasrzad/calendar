<template>
  <div>
    <p class="text-slate-500 font-semibold text-sm my-1 ml-1">{{ label }}</p>
    <input
      :id="id"
      :name="name"
      :placeholder="placeholder ? placeholder : name"
      :type="type"
      :autocomplete="autocomplete"
      :class="inputClass"
      :value="modelValue"
      @input.prevent="change"
      class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm outline-1 hover:bg-slate-100 outline-slate-400 outline placeholder:text-gray-400 t sm:text-sm sm:leading-6"
    />
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['update:modelValue'])
  // props
  const props = defineProps({
    id: String,
    inputClass: String,
    modelValue: String,
    name: String,
    placeholder: String,
    autocomplete: String,
    type: String,
    label: {
      type: String,
      default: '',
    },
  })
  //
  // change event handler
  const change = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value)
  }
  //
</script>
