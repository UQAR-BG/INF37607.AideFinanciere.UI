import { signUpUserFn } from "@/api/authApi";
import type { SignUpInput } from "@/types/auth/signup";
import type { SignupResponse } from "@/types/student";
import { createToast } from "mosha-vue-toastify";
import { useMutation } from "@tanstack/vue-query";

export const useSignup = () => {
	const router = useRouter();

	const signupMutation = useMutation({
		mutationFn: (credentials: SignUpInput) => signUpUserFn(credentials),
		onError: (error) => {
			if (Array.isArray((error as any).response.data.error)) {
				(error as any).response.data.error.forEach((el: any) =>
					createToast(el.message, {
						position: "top-right",
						type: "warning"
					})
				);
			} else {
				createToast((error as any).response.data.message, {
					position: "top-right",
					type: "danger"
				});
			}
		},
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
