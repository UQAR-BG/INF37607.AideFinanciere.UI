<template>
	<main class="container page">
		<StudentInfoDemande />
	</main>
</template>

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



<route lang="yaml">
meta:
 layout: claim
</route>

<style scoped></style>
