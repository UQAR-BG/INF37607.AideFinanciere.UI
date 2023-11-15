<template>
	<h1 class="first-heading animate-fade-in">
		{{ title }}
	</h1>
</template>

<script setup lang="ts">
	defineProps({
		title: String
	});
</script>
