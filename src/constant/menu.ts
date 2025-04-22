interface MenuItem {
	name: string
	comment: string
	icon: string
	index: string
	children?: MenuItem[]
}

let menu: MenuItem[] = [
	{
		name: 'dashboard',
		comment: '仪表盘',
		icon: 'dashboard',
		index: '/dashboard'
	},
	{
		name: 'user',
		comment: '用户',
		icon: 'user',
		index: '/user',
		children: [
			{
				name: 'account',
				comment: '账号',
				icon: 'account',
				index: '/account'
			},
			{
				name: 'role',
				comment: '角色',
				icon: 'role',
				index: '/role'
			},
			{
				name: 'department',
				comment: '部门',
				icon: 'department',
				index: '/department'
			}
		]
	},
	{
		name: 'survey',
		comment: '问卷',
		icon: 'survey',
		index: '/survey',
		children: [
			{
				name: 'survey',
				comment: '问卷',
				icon: 'survey',
				index: '/survey'
			},
			{
				name: 'trash',
				comment: '回收站',
				icon: 'trash',
				index: '/trash'
			}
		]
	},
	{
		name: 'setting',
		comment: '系统设置',
		icon: 'setting',
		index: '/setting',
		children: [
			{
				name: 'preferences',
				comment: '系统偏好',
				icon: 'preferences',
				index: '/preferences'
			},
			{
				name: 'instructions',
				comment: '系统说明',
				icon: 'instructions',
				index: '/instructions'
			}
		]
	}
]

export default menu
