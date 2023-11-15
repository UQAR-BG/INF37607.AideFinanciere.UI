<template>
	<NuxtLink
		class="text-font-pale/[.9] no-underline text-base border-y-0 border-x border-font-pale/[.9] py-4 px-7 transition-all duration-200 hover:cursor-pointer hover:bg-navlink-hover"
		:class="active ? 'bg-navlink-active' : 'bg-navbar'"
		:id="id"
		:to="to"
		><slot
	/></NuxtLink>
</template>

<script setup lang="ts">
	defineProps({
		id: String,
		to: String,
		active: Boolean
	});
</script>
