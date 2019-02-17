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
                title: 'bot后台-首页'
            }
        }]
})

ROUTER.beforeEach((to, from, next) => {
    window.scrollTo(0, 0)
    next()
})

ROUTER.afterEach((to, from) => {
    const { title } = to.meta
    document.title = title || 'bot'
})

// ROUTER.responseErrorHandler = responseErrorHandler

export default ROUTER
