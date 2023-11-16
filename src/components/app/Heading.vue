<template>
	<h1
		class="text-4xl font-bold mt-6 mx-0 mb-8 not-italic text-heading tracking-normal animate-fade-in after:content-[''] after:block after:w-12 after:pt-2 after:border-b-4 after:border-solid after:border-after-border"
	>
		{{ title }}
	</h1>
</template>

<script setup lang="ts">
	defineProps({
		title: String
	});
</script>
