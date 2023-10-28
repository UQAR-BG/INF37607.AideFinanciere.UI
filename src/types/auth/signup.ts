/* Repéré à https://codevoweb.com/pinia-vue-query-axios-jwt-authentication/ */

export type SignUpInput = {
	assuranceSociale: string;
	birthdate: Date;
	password: string;
	passwordConfirm: string;
};

export type SignUpResponse = {
	status: string;
	message: string;
};
