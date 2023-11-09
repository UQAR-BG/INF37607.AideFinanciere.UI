<template>
	<header class="header">
		<div class="container">
			<div class="header-container">
				<section class="logo-section">
					<img class="logo" src="/images/logo.png" alt="Logo" />
					<h1 class="title">Aide financière aux études</h1>
				</section>
				<nav>
					<ul class="header-links">
						<NuxtLink class="header-link" to="/">Accueil</NuxtLink>
						<NuxtLink class="header-link" to="/" v-if="isSignedIn"
							>Déconnexion</NuxtLink
						>
						<NuxtLink class="header-link" to="/inscription">Inscription</NuxtLink>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
	import { useAuthStore } from "@/stores/authStore";

	const store = useAuthStore();
	const isSignedIn = store.isSignedIn;
</script>
