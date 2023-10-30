<template>
	<AppHeader />
	<AppNavBar />

	<main class="container page">
		<h1 class="first-heading" v-once>Demande d'aide financière</h1>

		<FadeTransition>
			<router-view />
		</FadeTransition>
		<!-- <router-view v-slot="{ Component }">
			<FadeTransition>
				<component :is="Component" />
			</FadeTransition>
		</router-view> -->
	</main>

	<AppFooter v-once />
</template>
