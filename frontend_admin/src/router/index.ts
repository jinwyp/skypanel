import { createMemoryHistory, createRouter } from 'vue-router'

import HelloWorld from '@/components/AppSystem/HelloWorld.vue'
import AppSystemList from '@/components/AppSystem/AppSystemList.vue'


const routes = [
  { path: '/', component: AppSystemList },
  { path: '/appsystem', component: AppSystemList },
  { path: '/layout2', component: HelloWorld },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router;
