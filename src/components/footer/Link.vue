<template>
	<li
		class="text-xs text-font-link no-underline font-normal hover:cursor-pointer hover:underline"
	>
		<a :href="href"><slot /></a>
	</li>
</template>

<script setup lang="ts">
	defineProps({
		href: String
	});
</script>
