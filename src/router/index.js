import { createRouter, createWebHashHistory } from 'vue-router'
import WelcomePageHome from '../views/WelcomePage/WelcomePageHome'
import NewUser from '../views/User/New'
import LoginUser from '../views/User/LoginUser'
import ShowBlog from '../views/Blogs/ShowBlogs'
import IndexBlog from '../views/Blogs/IndexBlogs'
import NewBlogs from '../views/Blogs/NewBlogs'
import NewCommunity from '../views/Community/NewCommunity'
import ShowCommunity from '../views/Community/ShowCommunity'


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
  {
    path: '/blogs/:id',
    name: 'blogs_show_path',
    component: ShowBlog
  }, 
  {
    path: '/user/:id/blogs',
    name: 'user_blogs_path',
    component: IndexBlog
  }, 
  {
    path: '/user/:id/new/blog',
    name: 'user_new_blogs_path',
    component: NewBlogs
  }, 
  {
    path: '/user/:id/new/community',
    name: 'user_new_communities_path',
    component: NewCommunity
  },
  {
    path: '/user/:user_id/community/:community_id',
    name: 'community_show_path',
    component: ShowCommunity
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
