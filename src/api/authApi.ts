/* Repéré à https://codevoweb.com/pinia-vue-query-axios-jwt-authentication/ */
import axios from "axios";

import type { GenericResponse } from "@/types/auth/generic";
import type { LoginResponse, LoginInput } from "@/types/auth/login";
import type { UserResponse } from "@/types/auth/user";

const BASE_URL = "http://localhost:8000/api/";

const authApi = axios.create({
	baseURL: BASE_URL,
	withCredentials: true
});

authApi.defaults.headers.common["Content-Type"] = "application/json";

export const refreshAccessTokenFn = async () => {
	const response = await authApi.get<LoginResponse>("auth/refresh");
	return response.data;
};

authApi.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		const originalRequest = error.config;
		const errMessage = error.message as string;
		if (errMessage.includes("not logged in") && !originalRequest._retry) {
			originalRequest._retry = true;
			await refreshAccessTokenFn();
			return authApi(originalRequest);
		}
		return Promise.reject(error);
	}
);

export const signUpUserFn = async (user: RegisterInput) => {
	const response = await authApi.post<GenericResponse>("auth/register", user);
	return response.data;
};

export const loginUserFn = async (user: LoginInput) => {
	const response = await authApi.post<LoginResponse>("auth/login", user);
	return response.data;
};

export const logoutUserFn = async () => {
	const response = await authApi.get<GenericResponse>("auth/logout");
	return response.data;
};

export const getMeFn = async () => {
	const response = await authApi.get<UserResponse>("users/me");
	return response.data;
};
