import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Active from '@/components/Active.vue'
import Main from '@/components/Main.vue'
import Completed from '@/components/Completed.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/main' },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        { path: '/main', name: 'main', component: Main },
        { path: '/active', name: 'active', component: Active },
        { path: '/completed', name: 'completed', component: Completed }
      ]
    }
  ]
})
