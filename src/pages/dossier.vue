<template>
	<LazyNuxtLayout name="student-profile">
		<section class="main-section animate-fade-in-1">
			<RenderCacheable
				><AppHeading title="Renseignements personnels"
			/></RenderCacheable>

			<LazyStudentInfo />
		</section>
	</LazyNuxtLayout>
</template>

<script setup lang="ts">
	import { useHead } from "unhead";

	definePageMeta({
		name: "dossier",
		layout: false,
		meta: {
			title: "Dossier étudiant",
			navOrder: 3
		}
	});

	useHead({
		title: "Dossier étudiant"
	});
</script>
