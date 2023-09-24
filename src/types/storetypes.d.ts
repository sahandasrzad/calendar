// repeat type
type repeat = 'not' | 'daily' | 'weekly' | string | null

// task type
export type Task = {
  id: string
  title: string
  repeat: repeat
  start_time: object
  end_time: object
  start_date: Date
  style: {
    color: object
    top: number
    size: number
  }
}
// pinia-> store/task.ts/state
export type State = {
  task: null | Task | undefined
  editFlag: boolean
  tasks: Task[]
  modalStatus: boolean
}
