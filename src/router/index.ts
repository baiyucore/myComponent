import { createRouter, createWebHistory } from 'vue-router'

import test from "@/test.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   { 
      path:"/",
      component:test,
   },
  ]
})

export default router
