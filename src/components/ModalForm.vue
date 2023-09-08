<template>
  <form>
    <div class="mx-3 mt-2">
      <base-input
        :id="'title'"
        class="mt-2"
        :name="'No Title'"
        :label="'title'"
        v-model="title"
      ></base-input>
      <p class="text-slate-500 font-semibold text-sm my-1 ml-1">date & time</p>
      <div class="flex items-center my-2">
        <VueDatePicker
          class="text-sm"
          auto-apply
          :clearable="false"
          :typeable="false"
          calendar-cell-class-name="dp-custom-cell"
          v-model="date"
          :enable-time-picker="false"
        ></VueDatePicker>
        <base-time-select class="ml-1" v-model="starttime"></base-time-select>
        <p class="leading-5">-</p>
        <base-time-select class="" v-model="endtime"></base-time-select>
      </div>

      <base-select
        :label="'repeat'"
        class="mt-2"
        :tabindex="1"
        v-model="option"
      ></base-select>
      <base-color-select
        :label="'color'"
        class="mt-2"
        v-model="color"
        :tabindex="1"
      ></base-color-select>
      {{ formObject }}
      <base-button v-bind="button" @click.prevent="click"></base-button>
    </div>
  </form>
</template>
<script lang="ts" setup>
  import { ref, watch, computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useTaskStore } from '@/stores/task'
  import BaseButton from '@/components/base/BaseButton.vue'
  import BaseSelect from '@/components/base/BaseSelect.vue'
  import BaseInput from '@/components/base/BaseInput.vue'
  import BaseTimeSelect from '@/components/base/BaseTimeSelect.vue'
  import BaseColorSelect from '@/components/base/BaseColorSelect.vue'
  const props = defineProps({
    formObject: {
      type: Object,
      required: true,
    },
  })
  const button = {
    type: 'button',
    text: 'submit',
    bg_color: 'blue',
    text_color: 'white',
    disabled: false,
    icon: 'arrow-right',
  }
  const click = () => {
    console.log('ishere')
  }

  // last task changed ---->
  const { lastTask } = useTaskStore()

  //////////////////////////////
  const title = ref(props.formObject.title ? props.formObject.title : '')
  const date = ref(
    props.formObject.time_and_date.start_date
      ? props.formObject.time_and_date.start_date
      : '',
  )
  const starttime = ref(
    props.formObject.time_and_date.start_time
      ? props.formObject.time_and_date.start_time
      : {},
  )
  const endtime = ref(
    props.formObject.time_and_date.end_time
      ? props.formObject.time_and_date.end_time
      : {},
  )
  const option = ref(props.formObject.repeat)
  const color = ref(props.formObject.style.color)
</script>
