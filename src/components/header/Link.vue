<template>
	<NuxtLink
		class="text-sm no-underline text-font-pale/[.9] transition-all duration-200 hover:cursor-pointer hover:underline hover:text-font-pale"
		:to="to"
		><slot
	/></NuxtLink>
</template>

<script setup lang="ts">
	defineProps({
		to: String
	});
</script>
