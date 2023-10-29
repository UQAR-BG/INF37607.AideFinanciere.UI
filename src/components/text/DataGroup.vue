<template>
	<div class="data-group">
		<InputLabel :label="label" :id="id" />
		<span class="data">{{ data }}</span>
	</div>
</template>

<script setup lang="ts">
	defineProps({
		label: String,
		id: String,
		data: String
	});
</script>
