<template>
	<h2
		class="text-xl font-normal mt-6 mx-0 mb-8 not-italic text-heading font-second-heading"
	>
		{{ title }}
	</h2>
</template>

<script setup lang="ts">
	defineProps({
		title: String
	});
</script>
