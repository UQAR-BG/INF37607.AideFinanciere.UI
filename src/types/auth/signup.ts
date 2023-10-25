/* Repéré à https://codevoweb.com/pinia-vue-query-axios-jwt-authentication/ */

export type SignUpInput = {
	name: string;
	email: string;
	password: string;
	passwordConfirm: string;
};

export type SignUpResponse = {
	status: string;
	message: string;
};
