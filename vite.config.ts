import {defineConfig, loadEnv} from 'vite'
import type {ConfigEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from 'url'
import path from 'path'
export default (configEnv: ConfigEnv) => {
  // Load app-level env vars to node-level env vars.
  process.env = {...process.env, ...loadEnv(configEnv.mode, process.cwd(), '')}
  return defineConfig({
    base: process.env.VITE_APP_BASE_URL,
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: tag => ['Button'].includes(tag),
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}
