import {
	getStudentInfo,
	updateStudentInfo,
	validateStudentInfo
} from "@/api/studentApi";
import type { Student } from "@/types/student";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { toast } from "vue3-toastify";
import type { ValidateStudentInfo } from "~/types/auth/signup";

export const useStudent = () => {
	const queryClient = useQueryClient();

	const studentInfoQuery = useQuery<Student>({
		queryKey: ["studentInfo"],
		queryFn: () => getStudentInfo(),
		staleTime: 1000 * 60 * 5,
		retry: 3
	});

	const validateStudentInfoMutation = useMutation({
		mutationFn: (studentInfo: ValidateStudentInfo) =>
			validateStudentInfo(studentInfo),
		onError: (error) => {
			console.log(error);
			toast.error((error as any).response.data, {
				position: toast.POSITION.TOP_RIGHT
			});
		}
	});

	const studentInfoMutation = useMutation({
		mutationFn: (studentInfo: Student) => updateStudentInfo(studentInfo),
		onError: (error) => {
			if (Array.isArray(error as any)) {
				(error as any).forEach((el: any) =>
					toast.warn(el.message, {
						position: toast.POSITION.TOP_RIGHT
					})
				);
			} else {
				toast.error((error as any).message, {
					position: toast.POSITION.TOP_RIGHT
				});
			}
		},
		onSuccess: (data: Student) => {
			queryClient.setQueryData(["studentInfo"], data);
			toast.success("Renseignements personnels modifiés avec succès", {
				position: toast.POSITION.TOP_RIGHT
			});
		}
	});

	return {
		studentInfoQuery,
		studentInfoMutation,
		validateStudentInfoMutation
	};
};
