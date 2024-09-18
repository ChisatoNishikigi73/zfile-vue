<template>
	<div class="footer-container">
		<a v-if="storageConfigStore.globalConfig?.icp" target="_blank" class="icp-link" href="https://beian.miit.gov.cn/">
			{{ storageConfigStore.globalConfig?.icp }}
		</a>
		<span v-if="storageConfigStore.globalConfig?.icp"> | </span>
		<span class="powered-by">Powered by 小茹茹</span>
	</div>
</template>

<script setup>
import useStorageConfigStore from "~/stores/storage-config";
const storageConfigStore = useStorageConfigStore();
</script>

<style scoped lang="scss">
.footer-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	font-family: var(--el-font-family);
	font-size: 14px;
	color: var(--el-text-color-secondary);
}

.icp-link {
	color: var(--el-text-color-secondary);
	text-decoration: none;
	
	&:hover {
		color: var(--el-color-primary);
	}
}

.powered-by {
	font-weight: normal;
}
</style>
