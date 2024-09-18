import ElementPlus from 'element-plus'
// 其他导入保持不变

// 导入 Element Plus 的暗黑模式 CSS
import 'element-plus/theme-chalk/dark/css-vars.css'

// 确保这行在其他样式导入之前

// 你自定义的 css
import './styles/main.css'
import './styles/tailwind/index.scss'
import 'babel-polyfill'

import App from './App.vue'
import axios from 'axios'
const app = createApp(App)

import useGlobalConfigStore from "~/stores/global-config";
const globalConfigStore = useGlobalConfigStore();

import config from '../package.json'
console.log("\n %c ZFile " + config.version + " %c https://github.com/zhaojun1998/zfile \n\n", "background: #35495e; padding: 1px; border-radius: 3px 0 0 3px; color: #fff", "background: #fadfa3; padding: 1px; border-radius: 0 3px 3px 0; color: #fff");

axios.get('/zfile.config.json').then((res) => {
  globalConfigStore.updateZfileConfig(res.data);
}).finally(() => {
  setTimeout(() => {
    app.mount('#app')
    document.body.classList.remove('loading')
  }, 100)
})

// 设置 Element Plus 为暗色模式
app.use(ElementPlus, {
  dark: true
})
