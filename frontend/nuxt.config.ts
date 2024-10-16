// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process'

const sw = process.env.SW === 'true'


export default defineNuxtConfig({
  css: ["@/assets/styles/config.scss"],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    ssrBaseApiUrl: import.meta.env.SSR_API_BASE_URL
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})