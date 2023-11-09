<template>
	<NuxtLayout name="default">
		<section class="form-section">
			<h1 class="first-heading" v-once>Inscription</h1>

			<SignupForm />
		</section>
	</NuxtLayout>
</template>

<script setup lang="ts">
	definePageMeta({
		name: "inscription",
		layout: false,
		meta: {
			title: "Inscription",
			navOrder: 2
		}
	});

	useHead({
		title: "Inscription"
	});
</script>
