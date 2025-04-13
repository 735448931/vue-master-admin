<template>
	<div class="common-layout">
		<el-container>
			<el-header>
				<div>模拟问卷</div>
			</el-header>
			<el-container>
				<el-aside width="200px">
					<el-menu router default-active="/survey">
						<el-menu-item index="/survey">
							<span>问卷列表</span>
						</el-menu-item>
						<el-menu-item index="/trash">
							<span>回收站</span>
						</el-menu-item>
					</el-menu>
				</el-aside>
				<el-container>
					<el-main> <router-view /> </el-main>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<style scoped></style>
