import {
	getStudentInfo,
	updateStudentInfo,
	validateStudentInfo
} from "@/api/studentApi";
import type { SignupStudentInfo, Student } from "@/types/student";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";

export const useStudent = () => {
	const queryClient = useQueryClient();

	const studentInfoQuery = useQuery<Student>({
		queryKey: ["studentInfo"],
		queryFn: () => getStudentInfo(),
		staleTime: 1000 * 60 * 5,
		retry: 3
	});

	const validateStudentInfoMutation = useMutation({
		mutationFn: (studentInfo: SignupStudentInfo) =>
			validateStudentInfo(studentInfo)
	});

	const studentInfoMutation = useMutation({
		mutationFn: (studentInfo: Student) => updateStudentInfo(studentInfo),
		// onError: (error) => {
		// 	if (Array.isArray(error as any)) {
		// 		(error as any).forEach((el: any) =>
		// 			Toast.createToast(el.message, {
		// 				position: "top-right",
		// 				type: "warning"
		// 			})
		// 		);
		// 	} else {
		// 		Toast.createToast((error as any).message, {
		// 			position: "top-right",
		// 			type: "danger"
		// 		});
		// 	}
		// },
		onSuccess: () => {
			queryClient.refetchQueries({ queryKey: ["studentInfo"] });
			// Toast.createToast("Renseignements personnels modifiés avec succès", {
			// 	position: "top-right"
			// });
		}
	});

	return {
		studentInfoQuery,
		studentInfoMutation,
		validateStudentInfoMutation
	};
};
