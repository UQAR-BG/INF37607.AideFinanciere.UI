<template>
	<span class="text-xs error-label">{{ errorMessage }}</span>
</template>

<script setup lang="ts">
	defineProps({
		errorMessage: String
	});
</script>
