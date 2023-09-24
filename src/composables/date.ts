import { ref, watch } from 'vue'
import { useDateStore } from '@/stores/date'
export const useDate = () => {
  const moveTimer = ref()
  const date = ref()
  const day = ref()
  const dateStore = useDateStore()
  const update = (param: Date) => {
    date.value = param
    day.value = param.getDate()
    dateStore.changeDate(param)
  }
  return { update, date, day }
}
