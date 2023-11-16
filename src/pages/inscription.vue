<template>
	<LazyNuxtLayout name="default">
		<section class="flex flex-col mb-12 animate-fade-in-1">
			<RenderCacheable><AppHeading title="Inscription" /></RenderCacheable>

			<LazySignupForm />
		</section>
	</LazyNuxtLayout>
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
