export type Student = {
	id?: number;
	permanentCode?: string;
	firstname?: string;
	lastname?: string;
	socialInsuranceNumber?: string;
	email?: string;
	correspondenceAddress?: string;
	phoneNumber?: string;
	dateOfBirth?: string;
};

export type StudentResponse = {
	status: string;
	data: {
		student: Student;
	};
};

export type StudentInfoValidateResponse = boolean;
