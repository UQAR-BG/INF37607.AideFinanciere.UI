/* Repéré à https://codevoweb.com/pinia-vue-query-axios-jwt-authentication/ */

export type LoginInput = {
	codePermanent: string;
	password: string;
};

export type LoginResponse = {
	status: string;
	access_token: string;
};
