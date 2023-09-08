type repeat = 'not' | 'daily' | 'weekly' | string | null
export type Task = {
  id: string
  title?: string | undefined
  repeat: repeat
  time_and_date: {
    start_time: object
    end_time: object
    start_date: string
    end_Date: string
  }
  style: {
    color: object
    top: number
    size: number
  }
}

export type State = {
  tasks: Task[]
  modalStatus: boolean
}
