<template>
	<div class="flex flex-col mb-6">
		<InputLabel :label="label" :id="id" />
		<span class="font-bold">{{
			isDate ? date.format(new Date(data)) : data
		}}</span>
	</div>
</template>

<script setup lang="ts">
	defineProps({
		label: String,
		id: String,
		data: String,
		isDate: {
			type: Boolean,
			default: false
		}
	});

	const date = useDate();
</script>
