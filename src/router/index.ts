import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '../Layout/index.vue'
const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: Layout,
		children: []
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
	scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
