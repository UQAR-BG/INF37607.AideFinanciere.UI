import type { User } from "./user";

export type LoginInput = {
	codePermanent: string;
	password: string;
};

export type LoginResponse = {
	token: string;
	userToReturn: User;
};
