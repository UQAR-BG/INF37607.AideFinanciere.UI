/* Repéré à https://codevoweb.com/pinia-vue-query-axios-jwt-authentication/ */

import type { User } from "./user";

export type LoginInput = {
	codePermanent: string;
	password: string;
};

export type LoginResponse = {
	token: string;
	userToReturn: User;
};
