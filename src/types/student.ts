export type Student = {
	codePermanent?: string;
	created_at?: string;
	updated_at?: string;
	email?: string;
	address?: string;
	phoneNumber?: string;
};

export type StudentResponse = {
	status: string;
	data: {
		studentInfo: Student;
	};
};
