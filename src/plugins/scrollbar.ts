import type { App } from 'vue'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

export const scrollbar = (app: App) => {
  app.use(PerfectScrollbar)
}
