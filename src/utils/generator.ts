// generate random id
const uid = () => Date.now().toString(32)
import * as time from './time'
//   String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, '')

//generate default task object based on time
const defaultTask = () => {
  const obj = {
    id: uid(),
    title: 'No title',
    repeat: 'not',
    time_and_date: {
      start_time: {
        text: `${time.time_hours()}am`,
        value: Number(time.time_hours()),
      },
      end_time: {
        text: `${time.time_hours()}am`,
        value: Number(time.time_hours()),
      },
      start_date: time.date_full(),
      end_Date: time.date_full(),
    },
    style: {
      color: { name: 'blue', value: '#3b82f6' },
      top: 0,
      size: 35,
    },
  }
  return obj
}
export { uid, defaultTask }