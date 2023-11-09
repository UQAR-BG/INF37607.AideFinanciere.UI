<template>
	<div>
		<AppHeader />
		<AppNavBar />

		<main class="container page">
			<slot />
		</main>

		<AppSocials />
		<TheFooter />
	</div>
</template>
