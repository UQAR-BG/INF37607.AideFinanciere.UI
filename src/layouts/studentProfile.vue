<template>
	<AppHeader />
	<AppNavBar />

	<main class="container page">
		<h1 class="first-heading" v-once>Dossier de l'étudiant</h1>

		<router-view v-slot="{ Component }">
			<FadeTransition>
				<component :is="Component" />
			</FadeTransition>
		</router-view>
	</main>

	<AppFooter v-once />
</template>
