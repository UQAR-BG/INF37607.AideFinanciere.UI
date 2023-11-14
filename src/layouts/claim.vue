<template>
	<div>
		<AppHeader />
		<AppNavBar />

		<main class="container page">
			<AppHeading v-once>Demande d'aide financière</AppHeading>

			<slot />
		</main>

		<TheFooter v-once />
	</div>
</template>
