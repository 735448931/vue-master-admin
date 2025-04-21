<template>
	<el-table v-bind="$attrs" :data="data">
		<template v-for="(item, index) in options" :key="index">
			<el-table-column
				v-if="!item.action"
				:prop="item.prop"
				:label="item.label"
			>
				<template #default="scope">
					<slot
						v-if="item.slot"
						:name="item.slot"
						:data="scope.row"
					></slot>
				</template>
			</el-table-column>
		</template>

		<el-table-column
			v-if="actionOption"
			:prop="actionOption.prop"
			:label="actionOption.label"
		>
			<template #default="scope">
				<slot name="action" :data="scope.row"></slot>
			</template>
		</el-table-column>
	</el-table>
</template>

<script lang="ts" setup>
import type { DTableProps } from './index'

const props = defineProps<DTableProps>()

// 操作列
const actionOption = props.options.find((item) => item.action)
</script>
<style scoped></style>
