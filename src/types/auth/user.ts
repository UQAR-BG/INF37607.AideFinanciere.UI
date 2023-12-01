/* Repéré à https://codevoweb.com/pinia-vue-query-axios-jwt-authentication/ */

export type User = {
	firstName: string;
	lastName: string;
	email?: string;
	id: string;
};

export type UserResponse = {
	status: string;
	data: {
		user: User;
	};
};
