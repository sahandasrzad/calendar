import { ref } from 'vue'

export const useDate = () => {
  const date = ref()
  const name = ref('ghola')
  const update = (param: Date) => {
    console.log(param)

    date.value = param
  }

  return { update, date, name }
}
