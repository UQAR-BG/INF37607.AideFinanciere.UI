<template>
	<NuxtLayout name="default">
		<section class="form-section animate-fade-in-1">
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
		}
	});

	useHead({
		title: "Aide financière aux études "
	});
</script>
