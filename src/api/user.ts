// 定义基础用户接口

import request from '@/utils/request'
interface BaseUser {
	username: string
	password: string
	name?: string
	status?: 'enable' | 'disabled'
	skill?: any[] // 根据实际技能数据结构替换 any
	gender?: 'man' | 'woman'
	role_id?: string // Mongoose ObjectId 在前端通常用 string 表示
	email?: string
	phone?: number
	address?: any[] // 根据实际地址数据结构替换 any
	avatar?: string
	githubId?: string
}

// 扩展带数据库元数据的接口
interface User extends BaseUser {
	_id: string
	createdAt?: Date | string
	updatedAt?: Date | string
}

// 创建用户
type CreateUser = Omit<User, '_id' | 'createdAt' | 'updatedAt'>

// 更新用户
type UpdateUser = Partial<CreateUser>

// 登录接口返回
interface LoginResponse {
	user: User
	token: string
	permission: Array<string>
}

// 登录接口
export const loginApi = (userInfo: Pick<User,'username' | 'password'>) => {
	return request.post<LoginResponse>('/api/login', userInfo)
}

