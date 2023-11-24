<template>
	<div>
		<AppHeader />
		<AppNavBar v-if="isSignedIn" />

		<main class="m-auto max-w-5xl pt-5 px-4 pb-9">
			<slot />
		</main>

		<RenderCacheable>
			<AppSocials />
			<TheFooter />
		</RenderCacheable>
	</div>
</template>

<script setup lang="ts">
	const authStore = useAuthStore();

	const isSignedIn = computed(() => authStore.isSignedIn);
</script>
