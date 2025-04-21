<template>
	<div>
		<el-container direction="vertical">
			<Header></Header>
			<el-container>
				<Side></Side>
				<Main></Main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts" setup>
import Header from './Header/index.vue'
import Side from './Side/index.vue'
import Main from './Main/index.vue'
</script>

<style scoped></style>
