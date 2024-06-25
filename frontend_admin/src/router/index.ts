import { createMemoryHistory, createRouter } from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
import UserList from '@/components/Users/UserList.vue'
import AppSystemList from '@/components/AppSystem/AppSystemList.vue'


const routes = [
  { path: '/', component: AppSystemList },
  { path: '/users', component: UserList },
  { path: '/appsystem', component: AppSystemList },
  { path: '/layout2', component: HelloWorld },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router;
