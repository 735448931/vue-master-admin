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
				name: 'survey_trash',
				comment: '回收站',
				icon: 'survey_trash',
				index: '/survey_trash'
			}
		]
	}
]

export default menu
