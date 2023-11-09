<template>
	<div>
		<AppHeader />
		<AppNavBar />

		<main class="container page">
			<slot />
		</main>

		<TheFooter v-once />
	</div>
</template>
