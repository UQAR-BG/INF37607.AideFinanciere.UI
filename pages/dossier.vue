<template>
	<NuxtLayout name="student-profile">
		<section class="main-section">
			<h1 class="first-heading" v-once>Renseignements personnels</h1>

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
