<template>
	<LazyNuxtLayout name="default">
		<section class="flex flex-col mb-12 animate-fade-in-1">
			<AppSecondHeading :title="message" />
			<DataGroup
				label="Votre code permanent:"
				id="codePermanent"
				:data="codePermanent"
			/>
			<RenderCacheable>
				<NuxtLink to="/" class="text-font-link ml-2 font-normal underline"
					>Retour à l'identification</NuxtLink
				>
			</RenderCacheable>
		</section>
	</LazyNuxtLayout>
</template>

<script setup lang="ts">
	definePageMeta({
		name: "confirmation-creation-compte",
		layout: false,
		meta: {
			title: "Inscription complétée",
			navOrder: 3
		},
		middleware: ["auth"]
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
