<template>
	<header class="w-full bg-brand text-font-pale">
		<div class="m-auto max-w-5xl">
			<div class="flex justify-between items-center py-4">
				<RenderCacheable>
					<section class="flex justify-between items-center gap-x-16">
						<img class="logo" src="/images/logo.png" alt="Logo" />
						<h1 class="text-lg font-light tracking-wide text-font-pale/[.95]">
							Aide financière aux études
						</h1>
					</section>
				</RenderCacheable>
				<nav>
					<ul
						class="flex flex-col flex-wrap items-start justify-around gap-y-1.5 mr-10 list-none"
					>
						<HeaderLink to="/" v-if="!isSignedIn">Accueil</HeaderLink>
						<a
							href="#"
							v-if="isSignedIn"
							@click="logout"
							class="text-sm no-underline text-font-pale/[.9] transition-all duration-200 hover:cursor-pointer hover:underline hover:text-font-pale"
							>Déconnexion</a
						>
						<HeaderLink to="/inscription">Inscription</HeaderLink>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
	import { useAuthStore } from "@/stores/authStore";

	const store = useAuthStore();
	const router = useRouter();

	const isSignedIn = computed(() => store.isSignedIn);

	const logout = () => {
		store.logout();
	};
</script>
