import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '../Layout/index.vue'
const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: Layout,
		children: [
			{
				path: 'dashboard',
				component: () => import('@/page/dashboard/index.vue')
			},
			{
				path: 'survey',
				component: () => import('@/page/survey/index.vue')
			},
			{
				path: 'survey_trash',
				component: () => import('@/page/survey_trash/index.vue')
			}
		]
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
	scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
