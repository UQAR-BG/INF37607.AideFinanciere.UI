<template>
	<NuxtLayout name="default">
		<section class="form-section animate-fade-in-1">
			<AppHeading v-once>Inscription</AppHeading>

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
