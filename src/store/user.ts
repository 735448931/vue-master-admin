import { defineStore } from 'pinia'
import { dynamicRoutes } from '@/router/index.ts'
import type { RouteRecordRaw } from 'vue-router'

interface UserStore {
	username:string
	isAuthLoaded: boolean
	permissions: string[]
	isDynamicRoutesAdded: boolean
}

const useUserStore = defineStore('user', {
	state: (): UserStore => {
		return {
			username:'',
			isAuthLoaded: false,
			permissions: [],
			isDynamicRoutesAdded: false
		}
	},
	actions: {
		generateRoutes(): RouteRecordRaw[] {
			return dynamicRoutes.filter((route) => {
				return (
					route.meta &&
					this.permissions.includes(route.meta.permission as string)
				)
			})
		},
		setPermissions(permissions: string[]) {
			this.permissions = permissions
			this.isAuthLoaded = true
		},
		setDynamicRoutes() {
			this.isDynamicRoutesAdded = true
		},

		logout() {
			this.username = ''
			this.isAuthLoaded = false
			this.permissions = []
			this.isDynamicRoutesAdded = false
		}
	}
})

export default useUserStore
