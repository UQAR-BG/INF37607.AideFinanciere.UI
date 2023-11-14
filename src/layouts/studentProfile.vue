<template>
	<div>
		<AppHeader />
		<AppNavBar />

		<main class="m-auto max-w-5xl page">
			<slot />
		</main>

		<TheFooter v-once />
	</div>
</template>
