<template>
	<section class="main-section">
		<h2 class="second-heading">Renseignements personnels</h2>

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
