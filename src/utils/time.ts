///// Time ///////////
let date = new Date()
const time_full = () => {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}
const time_hours = () => {
  return date.getHours()
}
const time_minutes = () => {
  return date.getMinutes()
}
// const addHours = (date: Date | null, hours: number) => {
//   let dateCopy: any = null
//   if (date) {
//     dateCopy = new Date(date)
//   } else {
//     dateCopy = new Date()
//   }
//   dateCopy.setHours(dateCopy.getHours() + hours)
//   return dateCopy
// }

//// Date ///////////
const date_full = () => {
  // return date.toLocaleDateString('en-US')
  return date
}
const date_day = () => {
  return date.getDate()
}
const date_month = () => {
  return date.getMonth()
}
const date_year = () => {
  return date.getFullYear()
}
export {
  time_full,
  time_hours,
  time_minutes,
  date_full,
  date_year,
  date_month,
  date_day,
  // addHours,
}
