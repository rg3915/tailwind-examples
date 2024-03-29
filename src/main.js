import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'
import '@/css/tailwind.css'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({ 
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
