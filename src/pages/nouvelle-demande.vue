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
		<section class="main-section animate-fade-in-1">
			<StudentInfoDemande />
		</section>
	</NuxtLayout>
</template>

<style scoped></style>
