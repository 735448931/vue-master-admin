// Tabel 表格请求参数
interface TabelQuery {
	page: number
	pageSize: number
	filter: Record<string, any>
	sort: Record<string, number>
}

// Tabel 表格响应结构
interface TableResponse<T> {
	data: T[]
	total: number
	page: number
	pageSize: number
}


