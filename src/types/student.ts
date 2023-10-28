import type { User } from "./auth/user";

export type StudentInfoInput = {
	email?: string;
	address?: string;
	phoneNumber?: string;
};

export type StudentInfoResponse = {
	status: string;
	message: string;
	studentInfo: StudentInfoInput | null;
};
