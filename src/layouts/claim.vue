<template>
	<div>
		<AppHeader />
		<AppNavBar />

		<main class="container page">
			<h1 class="first-heading" v-once>Demande d'aide financière</h1>

			<slot />
		</main>

		<TheFooter v-once />
	</div>
</template>
