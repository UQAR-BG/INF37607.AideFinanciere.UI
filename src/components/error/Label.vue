<template>
	<span class="small-label error-label">{{ errorMessage }}</span>
</template>

<script setup lang="ts">
	defineProps({
		errorMessage: String
	});
</script>
