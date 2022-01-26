// import Vue from 'vue'
// import Router from 'vue-router'
import { createRouter,createWebHistory} from "vue-router";
import routeConfig from "@/utils/config/routeConfig";
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'


// const homePage = r => require.ensure([], () => r(require('../views/homePage.vue')), 'homePage')
const homePage = () => import("@/views/homePage")
// const three = () => import("@/views/three")
// const theSpringFestival = () => import("@/views/theSpringFestival")
// const tecdoc = () => import("@/views/tecdoc")
// const select = () => import("@/views/select")

const getComponentByName = (name) =>{
  let path = name.split('-').join('/')
  const page = () => import(`@/${path}`)
  return page
}
const getRoute = (config) => Object.keys(config).map(configKey=>{
  const { title, name, path, redirect, children , meta} = config[configKey]
  const routeItem = {
    path:`/${path}`,
    component: getComponentByName(name),
    name: name.split('-').pop(),
    meta:{
      ...meta,
      title
    },
    children
  }
  return routeItem
})

// Vue.use(Router)
const router = createRouter({
  // mode: 'history',
  history:createWebHistory(),
  linkActiveClass: 'active',
  routes: [{
    path: '/:pathMatch(.*)',
    redirect: () => {
      return {
        name: 'homePage'
      }
    }
  },...getRoute(routeConfig)]
})

router.beforeEach(async (to, from, next) => {
  // 进度条
  // NProgress.start()
  // 搜索 query 参数
  next()
})

router.afterEach(() => {
  // NProgress.done()
})

export default router
