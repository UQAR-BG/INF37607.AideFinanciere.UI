<template>
	<NuxtLayout><NuxtPage /></NuxtLayout>
</template>

<script setup lang="ts">
	useHead({
		title: "Aide financière aux études",
		meta: [
			{ name: "charset", content: "UTF-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1.0" },
			{ name: "description", content: "Portail d'aide financière aux études." }
		],
		link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }]
	});
</script>

<style>
	.layout-enter-active,
	.layout-leave-active {
		transition: opacity 0.5s ease;
	}

	.layout-enter-from,
	.layout-leave-to {
		opacity: 0;
	}
</style>
