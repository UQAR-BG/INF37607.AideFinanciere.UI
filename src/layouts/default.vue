<template>
	<AppHeader />
	<AppNavBar />

	<main class="container page">
		<FadeTransition>
			<router-view />
		</FadeTransition>
		<!-- <router-view v-slot="{ Component }">
			<FadeTransition>
				<component :is="Component" />
			</FadeTransition>
		</router-view> -->
	</main>

	<AppSocials />
	<AppFooter />
</template>
