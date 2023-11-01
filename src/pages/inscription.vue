<template>
	<section class="form-section">
		<h1 class="first-heading" v-once>Inscription</h1>

		<SignupForm />
	</section>
</template>

<script setup lang="ts">
	definePage({
		name: "inscription",
		meta: {
			title: "Inscription",
			navOrder: 2
		}
	});

	useHead({
		title: "Inscription"
	});
</script>

<style scoped></style>
