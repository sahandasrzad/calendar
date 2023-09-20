import { defineStore } from 'pinia'
import { Task, State } from '@/types/storetypes.d.ts'
import { defaultTask } from '@/utils/generator.ts'
export const useTaskStore = defineStore({
  id: 'task',
  state: (): State => ({
    task: null,
    editFlag: false,
    tasks: [],
    modalStatus: false,
  }),
  getters: {
    getTasks({ tasks }) {
      return tasks
    },
  },
  actions: {
    changeModalStatus() {
      this.modalStatus = !this.modalStatus
      this.task = null
      // this.tasks.splice(-1)
    },
    initializeTask(index: any): any {
      const newTask = defaultTask()
      newTask.end_time.value = index
      newTask.end_time.text = `${index} am`
      newTask.start_time.text = `${index - 1} am`
      newTask.start_time.value = index - 1
      newTask.style.top = index * 40 - 40
      this.task = newTask
      this.modalStatus = true
    },
    updateInitTask(item: Task) {
      this.task = item
    },
    addTask(item: Task) {
      if (this.editFlag) {
        const findIndex = this.tasks.findIndex(
          (el: { id: any }) => el.id === item.id,
        )
        this.tasks.splice(findIndex, 1, item)
        this.editFlag = false
      } else {
        this.tasks.push(item)
      }
    },
    updateTask(id: string) {
      if (!id) return
      const item = this.tasks.find((el: { id: string }) => el.id === id)
      this.task = item
      this.editFlag = true
      this.modalStatus = true
    },
    deleteTask(id: string) {
      if (!id) return
      const findOne = this.tasks.findIndex((el: { id: string }) => el.id === id)
      this.tasks.splice(findOne, 1)
    },
  },
})
