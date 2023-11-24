/* Repéré à https://codevoweb.com/pinia-vue-query-axios-jwt-authentication/ */
import type { GenericResponse } from "@/types/auth/generic";
import type { LoginResponse, LoginInput } from "@/types/auth/login";
import type { UserResponse } from "@/types/auth/user";
import type { SignUpInput } from "@/types/auth/signup";
import type { SignupResponse } from "@/types/student";
import { useHttp } from "@/composables/useHttp";

export const refreshAccessTokenFn = async () => {
	const response = await useHttp().httpService.get<LoginResponse>(
		"authorization/refresh"
	);
	return response.data;
};

export const signUpUserFn = async (
	user: SignUpInput
): Promise<SignupResponse> => {
	// const response = await useHttp().httpService.post<GenericResponse>("auth/register", user);
	// return response.data;

	return new Promise((resolve) => {
		resolve({
			status: "success",
			message: "Le compte d'étudiant a été créé avec succès",
			data: {
				student: {
					codePermanent: "TEST012345"
				}
			}
		});
	});
};

export const loginUserFn = async (user: LoginInput) => {
	const response = await useHttp().httpService.post<LoginResponse>(
		"authorization/login",
		user
	);
	return response.data;
};

export const logoutUserFn = async () => {
	const response = await useHttp().httpService.get<GenericResponse>(
		"authorization/logout"
	);
	return response.data;
};

export const getMeFn = async () => {
	const response = await useHttp().httpService.get<UserResponse>("users/me");
	return response.data;
};
