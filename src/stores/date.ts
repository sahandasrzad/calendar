import {defineStore} from 'pinia'
import {date_day, date_full} from '@/utils/time'
export const useDateStore = defineStore({
  id: 'date',
  state: () => ({
    day: date_day(),
    date: date_full(),
  }),
  getters: {},
  actions: {
    // change date and day state -> selected date from datePicker component
    changeDate(param: any) {
      this.date = param
      this.day = param.getDate()
    },
  },
})
