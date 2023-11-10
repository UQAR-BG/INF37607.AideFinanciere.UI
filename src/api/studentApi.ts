import type {
	SignupStudentInfo,
	Student,
	StudentInfoValidateResponse,
	StudentResponse
} from "@/types/student";
import { useHttp } from "@/composables/useHttp";

const { httpService } = useHttp();

export const getStudentInfo = async (): Promise<Student> => {
	// const response = await httpService.get<Student>("student");
	// return response.data;

	return new Promise((resolve) => {
		resolve({
			codePermanent: "TEST012345",
			nas: "123 456 789",
			birthdate: new Date().toLocaleDateString(),
			firstname: "John",
			lastname: "Doe",
			address: "809 Rue du Pont",
			phoneNumber: "418-906-8555",
			email: "test@gmail.com"
		});
	});
};

export const updateStudentInfo = async (
	studentInfo: Student
): Promise<StudentResponse> => {
	const response = await httpService.patch<StudentResponse>(
		"student",
		studentInfo
	);
	return response.data;
};

export const validateStudentInfo = async (
	studentInfo: SignupStudentInfo
): Promise<StudentInfoValidateResponse> => {
	// const response = await httpService.post<StudentInfoValidateResponse>(
	// 	"student/validate",
	// 	studentInfo
	// );
	// return response.data;

	return new Promise((resolve) => {
		resolve({
			status: "success",
			message: "",
			data: {
				valid: true
			}
		});
	});
};
