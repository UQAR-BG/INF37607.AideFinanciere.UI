import {
	getStudentInfo,
	updateStudentInfo,
	validateStudentInfo
} from "@/api/studentApi";
import type {
	SignupStudentInfo,
	Student,
	StudentInfoValidateResponse
} from "@/types/student";
import { createToast } from "mosha-vue-toastify";
import { useMutation, useQuery, useQueryClient } from "vue-query";

export const useStudent = () => {
	const queryClient = useQueryClient();

	const studentInfoQuery = useQuery<Student>(
		"studentInfo",
		() => getStudentInfo(),
		{
			staleTime: 1000 * 60 * 5,
			retry: 3
		}
	);

	const validateStudentInfoMutation = useMutation(
		(studentInfo: SignupStudentInfo) => validateStudentInfo(studentInfo),
		{
			onError: (error) => {
				console.log(error);
			},
			onSuccess: (data: StudentInfoValidateResponse) => {
				console.log(data);
			}
		}
	);

	const studentInfoMutation = useMutation(
		(studentInfo: Student) => updateStudentInfo(studentInfo),
		{
			onError: (error) => {
				if (Array.isArray(error as any)) {
					(error as any).forEach((el: any) =>
						createToast(el.message, {
							position: "top-right",
							type: "warning"
						})
					);
				} else {
					createToast((error as any).message, {
						position: "top-right",
						type: "danger"
					});
				}
			},
			onSuccess: () => {
				queryClient.refetchQueries("studentInfo");
				createToast("Renseignements personnels modifiés avec succès", {
					position: "top-right"
				});
			}
		}
	);

	return {
		studentInfoQuery,
		studentInfoMutation,
		validateStudentInfoMutation
	};
};
