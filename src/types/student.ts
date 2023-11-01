import { boolean } from "zod";

export type Student = {
	codePermanent?: string;
	firstname?: string;
	lastname?: string;
	nas?: string;
	created_at?: string;
	updated_at?: string;
	email?: string;
	address?: string;
	phoneNumber?: string;
	birthdate?: string;
};

export type SignupStudentInfo = {
	nas?: string;
	birthdate?: Date;
	password?: string;
	passwordConfirm?: string;
};

export type StudentResponse = {
	status: string;
	data: {
		student: Student;
	};
};

export type StudentInfoValidateResponse = {
	status: string;
	message: string;
	data: {
		valid: boolean;
	};
};
