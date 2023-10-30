<template>
	<section class="main-section">
		<h1 class="first-heading" v-once>Renseignements personnels</h1>

		<StudentInfo />
	</section>
</template>

<route lang="yaml">
meta:
 layout: studentProfile
</route>

<script setup lang="ts">
	import { useHead } from "unhead";

	definePage({
		name: "dossier",
		meta: {
			title: "Dossier étudiant",
			navOrder: 3
		}
	});

	useHead({
		title: "Dossier étudiant"
	});
</script>
