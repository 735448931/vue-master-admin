<template>
	<el-pagination
		v-model:current-page="currentPage4"
		v-model:page-size="pageSize4"
		:page-sizes="[10, 20, 50, 100]"
		layout="total, sizes, prev, pager, next, jumper"
		:total="400"
		@size-change="handleSizeChange"
		@current-change="handleCurrentChange"
	/>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentPage4 = ref(4)
const pageSize4 = ref(100)


const handleSizeChange = (val: number) => {
	console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
	console.log(`current page: ${val}`)
}
</script>

<style scoped></style>
