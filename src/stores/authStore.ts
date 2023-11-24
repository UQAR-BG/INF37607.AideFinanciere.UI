/* Repéré à https://codevoweb.com/pinia-vue-query-axios-jwt-authentication/ */
import type { LoginResponse } from "~/types/auth/login";
import type { User } from "~/types/auth/user";

export type AuthStoreState = {
	token: string | null;
	authUser: User | null;
};

const initialValues: AuthStoreState = {
	token: null,
	authUser: null
};

export const useAuthStore = defineStore({
	id: "authStore",
	state: () => initialValues,
	getters: {
		isSignedIn: (state) => state.authUser !== null && state.token,
		user: (state) => state.authUser
	},
	actions: {
		setAuthUser(loginResponse: LoginResponse) {
			this.authUser = loginResponse.userToReturn;
			this.token = loginResponse.token;
		},
		logout() {
			this.authUser = initialValues.authUser;
			this.token = initialValues.token;
		}
	},
	persist: {
		storage: persistedState.cookiesWithOptions({
			sameSite: "strict"
		})
	}
});
