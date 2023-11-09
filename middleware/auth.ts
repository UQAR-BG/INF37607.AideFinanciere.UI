import { getMeFn } from "@/api/authApi";

export default defineNuxtRouteMiddleware(async (to, from) => {
	const response = await getMeFn();
	const user = response.data.user;

	if (!user) {
		return navigateTo("/");
	}
});
