<template>
	<AppHeader />
	<AppNavBar />

	<router-view v-slot="{ Component }">
		<FadeTransition>
			<component :is="Component" />
		</FadeTransition>
	</router-view>

	<AppSocials />
	<AppFooter />
</template>
