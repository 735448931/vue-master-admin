<template>
	<DTable :data="tableData" :options="options">
		<template #action="scope">
			<el-button size="small" type="primary">编辑</el-button>
			<el-button size="small" type="danger">删除</el-button>
		</template>

		<template #name="{ data }"> {{ data.name }} == </template>
	</DTable>
	<!-- <DPagination></DPagination> -->
</template>

<script setup lang="ts">
import type { TableOption } from '@/components/DTable'
import DTable from '@/components/DTable/index.vue'
import DPagination from '@/components/DPagination/index.vue'
const options: TableOption[] = [
	{
		prop: 'date',
		label: 'Date'
	},
	{
		prop: 'name',
		label: 'Name',
		slot: 'name'
	},
	{
		prop: 'address',
		label: 'Address'
	},
	{
		label: '操作',
		action: true
	}
]

const tableData = [
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles'
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles'
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles'
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles'
	}
]
</script>

<style scoped></style>
