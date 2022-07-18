import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OpinionsView from '../views/OpinionsView.vue'
import ManageView from '../views/ManageView.vue'
import EditView from '../views/EditView.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/opiniones',
    component: OpinionsView
  },
  {
    path: '/administracion',
    component: ManageView
  },
  {
    path: '/editar/:id',
    component: EditView
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
