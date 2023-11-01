<template>
	<section class="main-section">
		<h2 class="second-heading">{{ message }}</h2>
		<DataGroup
			label="Votre code permanent:"
			id="codePermanent"
			:data="codePermanent"
		/>
		<router-link to="/" class="form-link">Retour à l'identification</router-link>
	</section>
</template>

<route lang="yaml">
meta:
 layout: default
</route>

<script setup lang="ts">
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
