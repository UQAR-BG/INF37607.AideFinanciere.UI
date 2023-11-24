export default defineNuxtRouteMiddleware(async (to, from) => {
	const authStore = useAuthStore();

	if (to.path === "/" && authStore.isSignedIn) {
		return navigateTo("/dossier");
	}
});
