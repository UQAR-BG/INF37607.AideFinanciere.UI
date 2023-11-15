<template>
	<NuxtLayout name="default">
		<section class="main-section animate-fade-in-1">
			<h2 class="second-heading">{{ message }}</h2>
			<DataGroup
				label="Votre code permanent:"
				id="codePermanent"
				:data="codePermanent"
			/>
			<NuxtLink to="/" class="text-font-link ml-2 font-normal underline"
				>Retour à l'identification</NuxtLink
			>
		</section>
	</NuxtLayout>
</template>

<script setup lang="ts">
	definePageMeta({
		name: "confirmation-creation-compte",
		layout: false,
		meta: {
			title: "Inscription complétée",
			navOrder: 3
		}
	});

	useHead({
		title: "Inscription complétée"
	});

	const route = useRoute();
	const router = useRouter();

	const codePermanent = ref(route.params.id);
	const message = ref(route.query.message);

	onBeforeUpdate(() => {
		if (!route.params.id) {
			router.push({ path: "/" });
		}
	});
</script>
