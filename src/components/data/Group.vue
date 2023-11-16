<template>
	<div class="flex flex-col mb-6">
		<InputLabel :label="label" :id="id" />
		<span class="font-bold">{{ data }}</span>
	</div>
</template>

<script setup lang="ts">
	defineProps({
		label: String,
		id: String,
		data: String
	});
</script>
