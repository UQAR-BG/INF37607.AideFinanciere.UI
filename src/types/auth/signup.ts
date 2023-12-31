import type { Student } from "../student";

export type SignUpInput = {
	socialInsuranceNumber: string;
	dateOfBirth: Date;
	password: string;
};

export type ValidateStudentInfo = {
	socialInsuranceNumber: string;
	dateOfBirth: Date;
};

export type SignupResponse = Student;
