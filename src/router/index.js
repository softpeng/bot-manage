import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const ROUTER = new Router({
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/',
            name: 'index',
            component: require('@/pages/Index').default,
            meta: {
                title: 'bot后台-首页',
                isFree: false
            }
        },
        {
            path: '/login',
            name: 'login',
            component: require('@/pages/Login').default,
            meta: {
                title: 'bot后台-登录',
                isFree: true
            }
        }]
})

ROUTER.beforeEach((to, from, next) => {
    window.scrollTo(0, 0)
    next()
})

ROUTER.afterEach((to, from) => {
    const { title, isFree } = to.meta
    document.title = title || 'bot'
    if (!isFree && !sessionStorage.name) {
        ROUTER.push({name:'login'})
    }
})

// ROUTER.responseErrorHandler = responseErrorHandler

export default ROUTER
