<template>
	<div>
		<AppHeader />
		<AppNavBar />

		<main class="m-auto max-w-5xl page">
			<AppHeading v-once>Demande d'aide financière</AppHeading>

			<slot />
		</main>

		<TheFooter v-once />
	</div>
</template>
