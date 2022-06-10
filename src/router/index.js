import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/base/home'
import error from '@/views/other/error'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {title: '框架', code: 'index'},
      component: Layout,
      redirect: `${window.apiConfig.urlChange}home`,
      children:[
        {
          path: `${window.apiConfig.urlChange}home`,
          name: 'home',
          meta: {
            code: 'home',
            title: '首页'
          },
          component: resolve => require(['@/views/test/test.vue'], resolve),
        },
        {
          path: `${window.apiConfig.urlChange}pageA`,
          name: 'pageA',
          meta: {
            code: 'pageA',
            title: 'A页'
          },
          component: resolve => require(['@/views/page/pageA.vue'], resolve),
        },
        {
          path: `${window.apiConfig.urlChange}pageB`,
          name: 'pageB',
          meta: {
            code: 'pageB',
            title: 'B页'
          },
          component: resolve => require(['@/views/page/pageB.vue'], resolve),
        },
        {
          path: `${window.apiConfig.urlChange}pageC`,
          name: 'pageC',
          meta: {
            code: 'pageC',
            title: 'C页'
          },
          component: resolve => require(['@/views/page/pageC.vue'], resolve),
        },
        {
          path: `${window.apiConfig.urlChange}pageD`,
          name: 'pageD',
          meta: {
            code: 'pageD',
            title: 'D页'
          },
          component: resolve => require(['@/views/page/pageD.vue'], resolve),
        },
      ]
    },
    {
      path: `${window.apiConfig.urlChange}error`,
      name: 'error',
      meta: {title: '错误', code: 'error'},
      component: error,
    }
  ]
})
