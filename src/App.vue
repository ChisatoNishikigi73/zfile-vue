<template>
	<div class="dark-theme">
		<router-view />
	</div>
</template>

<script setup lang="ts">
import useRouterData from "~/composables/useRouterData";

let router = useRouter();
let route = useRoute();
useRouterData(router, route);

import uaBrowser from 'ua-browser'
console.log('当前浏览器信息:', uaBrowser());

// 在组件挂载时设置暗黑模式
onMounted(() => {
	document.documentElement.classList.add('dark-theme');
});
</script>

<style>
:root {
	/* 背景色保持不变 */
	--el-bg-color: #f5f7fa;
	--el-bg-color-overlay: #ffffff;
	
	/* 调整文字颜色使其更灰 */
	--el-text-color-primary: #5c5c5c;    /* 主要文字颜色，更灰 */
	--el-text-color-regular: #adadad;    /* 常规文字颜色，更灰 */
	--el-text-color-secondary: #999999;  /* 次要文字颜色，更灰 */
	
	/* 边框颜色可以稍微调整以配合更灰的文字 */
	--el-border-color-light: #e0e0e0;
	

	
	
	/* 其他颜色可以根据需要调整 */
}

body {
	background-color: var(--el-bg-color);
	color: var(--el-text-color-primary);
}

.zfile-header {
	background-color: @el-bg-color;
	color: var(--el-text-color-primary) !important;
	border-bottom: 1px solid var(--el-border-color-light) !important;
}

/* 其他全局样式... */

/* 添加以下全样式 */
.el-container .el-header:is(.dark *),
.el-container .el-footer:is(.dark *) {
	background-color: var(--el-bg-color) !important;
	color: var(--el-text-color-primary) !important;
}

html, body {
	margin: 0;
	padding: 0;
	height: 100%;
}

#app {
	height: 100%;
}
</style>