<template>
	<div>
		<AppHeader />
		<AppNavBar />

		<main class="m-auto max-w-5xl pt-5 px-4 pb-9">
			<AppHeading v-once>Demande d'aide financière</AppHeading>

			<slot />
		</main>

		<TheFooter v-once />
	</div>
</template>
