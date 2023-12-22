import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'
import pinia from './pinia'
// createApp(App).mount('#app')
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');

// import { setupRouter } from './router';
// const setupApp = async () => {
//     const app = createApp(App);
//     // 创建路由
//     setupRouter(app);
//     app.mount('#app')
// }
// setupApp();