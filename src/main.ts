import App from './App.vue'
import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import '@/constant/iconfont.js'
import Icon from '@/components/Icon.vue'

import { router } from './router'

import pinia from './store/index.ts'

const app = createApp(App)

app.component('Icon', Icon)
app.use(router)
app.use(pinia)
app.use(ElementPlus, {
	locale: zhCn
})
app.mount('#app')
