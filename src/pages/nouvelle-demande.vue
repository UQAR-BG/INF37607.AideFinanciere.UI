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
	<LazyNuxtLayout name="claim">
		<section class="main-section animate-fade-in-1">
			<LazyStudentInfoDemande />
		</section>
	</LazyNuxtLayout>
</template>

<style scoped></style>
