type repeat = 'not' | 'daily' | 'weekly' | string | null
export type Task = {
  id: string
  title?: string | undefined
  repeat: repeat
  start_time: object
  end_time: object
  start_date: string
  style: {
    color: object
    top: number
    size: number
  }
}

export type State = {
  task: null | Task
  tasks: Task[]
  modalStatus: boolean
}
