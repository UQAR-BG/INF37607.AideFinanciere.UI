<script setup lang="ts">
	import { useHead } from "unhead";

	definePageMeta({
		name: "nouvelle-demande",
		layout: false,
		meta: {
			title: "Nouvelle demande",
			navOrder: 1
		}
	});

	useHead({
		title: "Nouvelle demande"
	});
</script>

<template>
	<NuxtLayout name="claim">
		<main class="container page">
			<span>Nouvelle demande de bourse ou de prêt</span>
		</main>
	</NuxtLayout>
</template>

<style scoped></style>
