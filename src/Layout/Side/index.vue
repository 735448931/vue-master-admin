<template>
	<el-aside width="200px">
		<el-menu default-active="/dashboard" unique-opened router>
			<template v-for="item in menu" :key="item.index">
				<template v-if="item.children">
					<el-sub-menu :index="item.index">
						<template #title>
							<span>{{ item.comment }}</span>
						</template>

						<el-menu-item
							v-for="subMenu in item.children"
							:key="subMenu.index"
						>
							{{ subMenu.comment }}
						</el-menu-item>
					</el-sub-menu>
				</template>

				<template v-else>
					<el-menu-item :index="item.index">
						<span>{{ item.comment }}</span>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</el-aside>
</template>

<script setup lang="ts">
import menu from '@/constant/menu'
</script>

<style scoped></style>
