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
