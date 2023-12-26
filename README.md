## 配置别名"@"，比如 "@/vuews/.."

### 第一步 在 vite.config.ts 里  
<!-- 引入 -->
```
import path from "path"
// path 下有波浪线   运行  npm install -D @types/node

export default defineConfig({
  <!-- 配置下面的  resolve -->
  resolve: {
    alias:{
        "@": path.resolve("./src")
    }
  }
})
```
### 第二步 在 tsconfig.json 下的 compilerOptions 最后配置如下
```
"compilerOptions": {
    "baseUrl": "./",
    "paths": {
        "@/*": ["src/*"]
    }
}
```

## 安装路由
```
npm install vur-router

```
```
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
```

## 安装 less
```
 npm install less less-loader --save-dev
```
