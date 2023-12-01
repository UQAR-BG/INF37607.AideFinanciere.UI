import type {
	Student,
	StudentInfoValidateResponse,
	StudentResponse
} from "@/types/student";
import { useHttp } from "@/composables/useHttp";
import type { ValidateStudentInfo } from "~/types/auth/signup";

export const getStudentInfo = async (): Promise<Student> => {
	const { httpService, authorizeHeader } = useHttp();

	const response = await httpService.get<Student>("user", authorizeHeader);
	console.log(response.data);
	return response.data;
};

export const updateStudentInfo = async (
	studentInfo: Student
): Promise<Student> => {
	const { httpService, authorizeHeader } = useHttp();

	const response = await httpService.patch<Student>(
		"user",
		studentInfo,
		authorizeHeader
	);
	return response.data;
};

export const validateStudentInfo = async (
	studentInfo: ValidateStudentInfo
): Promise<StudentInfoValidateResponse> => {
	const response = await useHttp().httpService.post<StudentInfoValidateResponse>(
		"authorization/validate",
		studentInfo
	);
	return response.data;
};
