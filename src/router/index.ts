// import type { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const publicRoutes: Array<RouteRecordRaw> = [
    // ...LoginRouter,
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login',
    },
    {
        // path:'/',
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        // redirect: '/home'
        redirect: '/home/props',
        children: [
            {
                // path: '/',
                path: 'props',
                name: 'props',
                component: () => import('@/communication/props/index.vue')
            },
            {
                path: 'cuctom-event',
                name: 'cuctomEvent',
                component: () => import('@/communication/custom-event/index.vue')
            },
            {
                path: 'event-bus',
                name: 'eventBus',
                component: () => import('@/communication/event-bus/index.vue')
            },
            {
                path:'v-model',
                name:"vModel",
                component:()=>import('@/communication/v-model/index.vue')
            },
            {
                path:'ref-parent',
                name:'refParent',
                component:()=>import('@/communication/ref-parent/index.vue')
            },
            {
                path:'provide-inject',
                name: 'provideIinject',
                component:()=>import('@/communication/provide-inject/index.vue')
            },
            {
                path:'pinia',
                name:'pinia',
                component:()=>import('@/communication/pinia/index.vue')
            },
            {
                path:'solt',
                name:'solt',
                component:()=>import('@/communication/solt/index.vue')
            }
        ]
    },

]
// 创建路由器
const router = createRouter({
    history: createWebHashHistory(),
    routes: publicRoutes,
    // 滚动行为
    // 路由切换 滚动条默认回到顶部和最左边
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})

export default router;