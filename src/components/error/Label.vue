<template>
	<span class="text-xs font-medium text-font-error">{{ errorMessage }}</span>
</template>

<script setup lang="ts">
	defineProps({
		errorMessage: String
	});
</script>
