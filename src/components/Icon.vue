<template>
	<svg
		class="icon"
		aria-hidden="true"
		:style="{
			width: iconSize,
			height: iconSize
		}"
	>
		<use :xlink:href="iconName" :fill="color" />
	</svg>
</template>
<script setup lang="ts">
import { computed } from 'vue'

interface IconProps {
	name: string
	color?: string
	size?: string | number
}

const props = defineProps<IconProps>()

const iconName = computed(() => {
	return `#${props.name}`
})

// 处理尺寸格式
const iconSize = computed(() => {
	if (!props.size) return '16px'
	if (typeof props.size === 'number') {
		return `${props.size}px`
	}
	return props.size
})
</script>
<style scoped>
.icon {
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
</style>
