import { signUpUserFn } from "@/api/authApi";
import type { SignUpInput } from "@/types/auth/signup";
import type { SignupResponse } from "@/types/student";
import { useMutation } from "@tanstack/vue-query";

export const useSignup = () => {
	const router = useRouter();

	const signupMutation = useMutation({
		mutationFn: (credentials: SignUpInput) => signUpUserFn(credentials),
		// onError: (error) => {
		// 	if (Array.isArray((error as any).response.data.error)) {
		// 		(error as any).response.data.error.forEach((el: any) =>
		// 			Toast.createToast(el.message, {
		// 				position: "top-right",
		// 				type: "warning"
		// 			})
		// 		);
		// 	} else {
		// 		Toast.createToast((error as any).response.data.message, {
		// 			position: "top-right",
		// 			type: "danger"
		// 		});
		// 	}
		// },
		onSuccess: (response: SignupResponse) => {
			router.push({
				path: `/confirmation-creation-compte/${response.data.student.codePermanent}`,
				query: { message: response.message }
			});
		}
	});

	return {
		signupMutation
	};
};
