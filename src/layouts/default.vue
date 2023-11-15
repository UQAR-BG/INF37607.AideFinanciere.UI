<template>
	<div>
		<AppHeader />
		<AppNavBar />

		<main class="m-auto max-w-5xl pt-5 px-4 pb-9">
			<slot />
		</main>

		<AppSocials />
		<TheFooter />
	</div>
</template>
