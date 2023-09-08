import { defineStore } from 'pinia'
import { Task, State } from '@/types/storetypes'
import { defaultTask } from '@/utils/generator.ts'
export const useTaskStore = defineStore({
  id: 'task',

  state: (): State => ({
    tasks: [],
    modalStatus: false,
  }),
  getters: {
    getTasks: state => state.tasks,
    lastTask: state => {
      let last = state.tasks.splice(-1)
      return last[0]
    },
  },
  actions: {
    changeModalStatus() {
      this.modalStatus = !this.modalStatus
      this.tasks.splice(-1)
      console.log('this.tasks', this.tasks)
    },
    addTask(index: any): any {
      const newTask = defaultTask()
      console.log('index hour store', index)

      newTask.time_and_date.end_time.value = index
      newTask.time_and_date.start_time.value = index - 1
      newTask.style.top = index * 40 - 38
      console.log('tassss', newTask)

      this.tasks.push(newTask)
      this.modalStatus = true
    },
    updateTask(id: string, item: Task) {
      if (!id || !item) return
      const findOne = this.tasks.findIndex(el => el.id === id)
      this.tasks[findOne] = item
    },
    deleteTask(id: string) {
      if (!id) return
      const findOne = this.tasks.findIndex(el => el.id === id)
      this.tasks.splice(findOne, 1)
    },
  },
})
