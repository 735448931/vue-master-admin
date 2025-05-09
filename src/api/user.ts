import request from '@/utils/request'

interface BaseUser {
	username: string
	password: string
	name?: string
	status?: 'enable' | 'disabled'
	skill?: any[] // 根据实际技能数据结构替换 any
	gender?: 'man' | 'woman'
	role_id?: string
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

// 登录接口返回
interface LoginResponse {
	user: User
	token: string
	permission: Array<string>
}

// 账号登录接口
export const loginApi = (userInfo: Pick<User,'username' | 'password'>) => {
	return request.post<LoginResponse>('/api/login', userInfo)
}
// Github 登录
export const loginByGithubApi = () => {
	// a 标签 target 是这个地址
	const path = 'https://github.com/login/oauth/authorize?client_id=Ov23liiNAowYU7HyoxTZ'
}

export const userListApi = (query: TabelQuery) => {
	return request.get<TableResponse<User>>('/api/user', query)
}

export const userDetailApi = (id: string) => {
	return request.get<User>(`/api/user/${id}`)
}

export const userCreateApi = (data: CreateUser) => {
	return request.post<User>('/api/user', data)
}

export const userUpdateApi = (id: string, data: Partial<BaseUser>) => {
	return request.patch<User>(`/api/user/${id}`, data)
}

export const userDeleteApi = (id: string) => {
	return request.delete<User>(`/api/user/${id}`)
}


