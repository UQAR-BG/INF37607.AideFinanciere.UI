<template>
	<section class="form-section">
		<h1 class="first-heading">Identification</h1>

		<LoginForm />
	</section>
</template>

<script setup lang="ts">
	definePage({
		name: "home",
		meta: {
			title: "Aide financière aux études ",
			navOrder: 1
		}
	});

	useHead({
		title: "Aide financière aux études "
	});
</script>
