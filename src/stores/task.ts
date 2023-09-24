import {defineStore} from 'pinia'
import {Task, State} from '@/types/storetypes.d'
import {defaultTask} from '@/utils/generator'
import {useDateStore} from '@/stores/date'
export const useTaskStore = defineStore({
  id: 'task',
  state: (): State => ({
    task: null,
    editFlag: false,
    tasks: [],
    modalStatus: false,
  }),
  getters: {
    // get task by date filter
    getTasks({tasks}) {
      const removeTime = (date: any) => {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate())
      }
      const dateStore = useDateStore()
      const userSelectedDay = removeTime(new Date(dateStore.date)).getTime()
      const filteredTask = tasks.filter((item: any) => {
        const objDate = removeTime(item.start_date).getTime()
        return objDate === userSelectedDay
      })
      return filteredTask
    },
  },
  actions: {
    // close modal initialize new task
    changeModalStatus() {
      this.modalStatus = !this.modalStatus
      this.task = null
    },
    // create new task and open modal task
    createTask(index: number) {
      const newTask = defaultTask()
      const dateStore = useDateStore()
      newTask.start_date = dateStore.date
      newTask.end_time.value = index
      newTask.end_time.text = `${index} am`
      newTask.start_time.text = `${index - 1} am`
      newTask.start_time.value = index - 1
      newTask.style.top = index * 40 - 40
      this.task = newTask
      this.modalStatus = true
      return this.task
    },
    // update initialize task when modal is open
    updateInitTask(item: Task) {
      this.task = item
    },
    // add initialize task  to tasks array in state
    addTask(item: Task) {
      if (this.editFlag) {
        const findIndex = this.tasks.findIndex((el: {id: any}) => el.id === item.id)
        this.tasks.splice(findIndex, 1, item)
        this.editFlag = false
      } else {
        this.tasks.push(item)
      }
    },
    // update any task from list of tasks in state by id
    updateTask(id: string) {
      if (!id) return
      this.task = this.tasks.find((el: {id: string}) => el.id === id)
      this.editFlag = true
      this.modalStatus = true
    },
    // delete any task from list of tasks in state by id
    deleteTask(id: string) {
      if (!id) return
      const findOne = this.tasks.findIndex((el: {id: string}) => el.id === id)
      this.tasks.splice(findOne, 1)
      this.modalStatus = false
      this.task = null
    },
  },
})
