<template>
	<NuxtLink
		class="text-sm no-underline text-font-pale/[.9] transition-all duration-200 hover:cursor-pointer hover:underline hover:text-font-pale"
		:to="to"
		@click.native="emit"
		><slot
	/></NuxtLink>
</template>

<script setup lang="ts">
	defineProps({
		to: String
	});

	const emit = defineEmits(["onClick"]);
</script>
