<template>
	<NuxtLayout name="student-profile">
		<section class="main-section animate-fade-in-1">
			<AppHeading v-once>Renseignements personnels</AppHeading>

			<StudentInfo />
		</section>
	</NuxtLayout>
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
