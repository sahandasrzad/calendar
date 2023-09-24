<template>
  <form>
    <div class="mx-3 mt-2">
      <base-input
        :id="'title'"
        :name="' title'"
        :label="'title'"
        v-model="form.title"
        class="mt-2"
      ></base-input>
      <p class="text-slate-500 font-semibold text-sm my-1 ml-1">date & time</p>
      <div class="flex items-center my-2">
        <VueDatePicker
          auto-apply
          :clearable="false"
          :typeable="false"
          v-model="form.start_date"
          :enable-time-picker="false"
          class="text-sm"
          calendar-cell-class-name="dp-custom-cell"
        ></VueDatePicker>
        <base-time-select class="ml-1" v-model="form.start_time"></base-time-select>
        <p class="leading-5">-</p>
        <base-time-select class="" v-model="form.end_time"></base-time-select>
      </div>
      <base-select
        :label="'repeat'"
        :tabindex="1"
        v-model="form.repeat"
        class="mt-2"
      ></base-select>
      <base-color-select
        :label="'color'"
        :tabindex="1"
        v-model="form.style.color"
        class="mt-2"
      ></base-color-select>
      <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <base-button bg-color="primary" txt-color="white" @click.prevent="save">
          <span slot="default">Save</span>
        </base-button>
        <base-button bg-color="white" txt-color="black" @click.prevent="cancel">
          <span slot="default">Cancel</span>
        </base-button>
      </div>
    </div>
  </form>
</template>
<script lang="ts" setup>
  import {ref, watch} from 'vue'
  import {useTaskStore} from '@/stores/task'
  import BaseSelect from '@/components/base/BaseSelect.vue'
  import BaseInput from '@/components/base/BaseInput.vue'
  import BaseTimeSelect from '@/components/base/BaseTimeSelect.vue'
  import BaseColorSelect from '@/components/base/BaseColorSelect.vue'
  import BaseButton from '@/components/base/BaseButton.vue'
  // props
  const props = defineProps(['formObject'])
  //
  // state
  let form = ref(props.formObject)
  //
  // pinia store
  let taskStore = useTaskStore()
  //
  // events
  const cancel = () => {
    taskStore.changeModalStatus()
  }
  const save = () => {
    taskStore.addTask(form.value)
    taskStore.changeModalStatus()
  }
  //
  // watch
  watch(
    () => form.value,
    () => {
      form.value.style.size =
        (form.value.end_time.value - form.value.start_time.value) * 40
      form.value.style.top = form.value.start_time.value * 40
      taskStore.updateInitTask(form.value)
    },
    {deep: true},
  )
  //
</script>
