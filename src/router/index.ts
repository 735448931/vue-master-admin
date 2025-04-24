import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/Layout/index.vue'

export const staticRoutes: RouteRecordRaw[] = [
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/page/login/index.vue')
	},
	{
		path: '/',
		component: Layout,
		name: 'Layout',
		children: [
			{
				path: 'dashboard',
				component: () => import('@/page/dashboard/index.vue')
			}
		]
	}
]

export const dynamicRoutes: RouteRecordRaw[] = [
	{
		path: 'role',
		component: () => import('@/page/role/index.vue'),
		meta: {
			permission: 'role'
		}
	},
	{
		path: 'department',
		component: () => import('@/page/department/index.vue'),
		meta: {
			permission: 'department'
		}
	},
	{
		path: 'survey',
		component: () => import('@/page/survey/index.vue'),
		meta: {
			permission: 'survey'
		}
	},
	{
		path: 'trash',
		component: () => import('@/page/trash/index.vue'),
		meta: {
			permission: 'trash'
		}
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes: staticRoutes,
	scrollBehavior: () => ({ left: 0, top: 0 })
})

export { router }
