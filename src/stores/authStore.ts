/* Repéré à https://codevoweb.com/pinia-vue-query-axios-jwt-authentication/ */
import { defineStore } from "pinia";

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
	getters: {},
	actions: {
		setAuthUser(user: User | null) {
			this.authUser = user;
		}
	}
});
