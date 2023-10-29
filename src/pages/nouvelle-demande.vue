<script setup lang="ts">
	import { useHead } from "unhead";

	definePage({
		name: "nouvelle-demande",
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
	<main class="container page">
		<span>Nouvelle demande de bourse ou de prêt</span>
	</main>
</template>

<route lang="yaml">
meta:
 layout: claim
</route>

<style scoped></style>
