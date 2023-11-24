<template>
	<NuxtLayout name="default">
		<section class="flex flex-col mb-12 animate-fade-in-1">
			<RenderCacheable><AppHeading title="Identification" /></RenderCacheable>

			<LazyLoginForm />
		</section>
	</NuxtLayout>
</template>

<script setup lang="ts">
	definePageMeta({
		name: "home",
		layout: false,
		meta: {
			title: "Aide financière aux études ",
			navOrder: 1
		},
		middleware: ["root"]
	});

	useHead({
		title: "Aide financière aux études "
	});
</script>
