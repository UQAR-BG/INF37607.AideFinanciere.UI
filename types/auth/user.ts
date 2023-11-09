/* Repéré à https://codevoweb.com/pinia-vue-query-axios-jwt-authentication/ */

export type User = {
	name: string;
	email: string;
	id: string;
	created_at: string;
	updated_at: string;
};

export type UserResponse = {
	status: string;
	data: {
		user: User;
	};
};
