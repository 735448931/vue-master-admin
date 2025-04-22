// Tabel 表格响应结构
interface TableResponse<T> {
	data: T[]
	total: number
	page: number
	pageSize: number
}
