<template>
	<label class="input-label" :for="id">{{ label }}</label>
</template>

<script setup lang="ts">
	defineProps({
		label: String,
		id: String
	});
</script>
