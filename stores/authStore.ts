/* Repéré à https://codevoweb.com/pinia-vue-query-axios-jwt-authentication/ */
import type { User } from "@/types/auth/user";

export type AuthStoreState = {
	authUser: User | null;
};

export const useAuthStore = defineStore({
	id: "authStore",
	state: () =>
		({
			authUser: null
		} as AuthStoreState),
	getters: {
		isSignedIn: (state) => state.authUser !== null,
		user: (state) => state.authUser
	},
	actions: {
		setAuthUser(user: User | null) {
			this.authUser = user;
		}
	}
});
