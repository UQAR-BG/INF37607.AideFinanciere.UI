import type { LoginResponse, LoginInput } from "@/types/auth/login";
import type { SignUpInput, SignupResponse } from "@/types/auth/signup";
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
	const response = await useHttp().httpService.post<SignupResponse>(
		"authorization/registration",
		user
	);
	return response.data;
};

export const loginUserFn = async (user: LoginInput) => {
	const response = await useHttp().httpService.post<LoginResponse>(
		"authorization/login",
		user
	);
	return response.data;
};
