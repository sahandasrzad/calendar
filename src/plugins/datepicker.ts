import type { App } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
export const datepicker = (app: App) => {
  app.component('VueDatePicker', VueDatePicker)
}
