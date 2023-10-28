import axios from "axios";

import type { Student, StudentResponse } from "@/types/student";

const BASE_URL = "http://localhost:8000/api/";

const studentApi = axios.create({
	baseURL: BASE_URL,
	withCredentials: true
});

studentApi.defaults.headers.common["Content-Type"] = "application/json";

export const getStudentInfo = async (): Promise<Student> => {
	// const response = await studentApi.get<Student>("student");
	// return response.data;

	return new Promise((resolve) => {
		resolve({
			address: "809 Rue du Pont",
			phoneNumber: "418-906-8555",
			email: "test@gmail.com"
		});
	});
};

export const updateStudentInfo = async (
	studentInfo: Student
): Promise<StudentResponse> => {
	const response = await studentApi.patch<StudentResponse>(
		"student",
		studentInfo
	);
	return response.data;
};
