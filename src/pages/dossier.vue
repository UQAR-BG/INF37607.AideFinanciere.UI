<template>
	<main class="container page">
		<h1 class="first-heading">Dossier de l'étudiant</h1>

		<section class="main-section">
			<h2 class="second-heading">Renseignements personnels</h2>

			<StudentInfo />
		</section>
	</main>
</template>

<route lang="yaml">
meta:
 layout: main
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
