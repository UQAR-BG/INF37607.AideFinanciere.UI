<template>
	<div>
		<AppHeader />
		<AppNavBar />

		<main class="m-auto max-w-5xl page">
			<slot />
		</main>

		<AppSocials />
		<TheFooter />
	</div>
</template>
