import { router } from './index'
import useUserStore from '@/store/user'

import request from '@/utils/request'
router.beforeEach(async (to) => {
	const userStore = useUserStore()

	if (userStore.isAuthLoaded) {
		return true
	}

	try {
		const userInfo: any = await request.post('/api/login', {
			username: 'admin1',
			password: '123321'
		})

		userStore.setPermissions(userInfo.permission)

		if (!userStore.isDynamicRoutesAdded) {
			const routes = userStore.generateRoutes()
			routes.forEach((route) => router.addRoute('Layout', route))

			userStore.setDynamicRoutes()

			return { ...to, replace: true }
		}

		return true
	} catch (error) {
		console.log('登录失败', error)
		return '/login'
	}
})
