import { createRouter, createWebHashHistory } from 'vue-router'
import WelcomePageHome from '../views/WelcomePage/WelcomePageHome'
import NewUser from '../views/User/New'
import LoginUser from '../views/User/LoginUser'

const routes = [
  {
    path: '/',
    name: 'welcome_page_path',
    component: WelcomePageHome
  }, 
  {
    path: '/register_user',
    name: 'new_user_path',
    component: NewUser
  }, 
  {
    path: '/login_user',
    name: 'login_user_path',
    component: LoginUser
  }, 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
