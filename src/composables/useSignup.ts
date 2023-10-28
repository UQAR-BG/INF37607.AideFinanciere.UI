import { signUpUserFn } from "@/api/authApi";
import router from "@/router";
import type { SignUpInput } from "@/types/auth/signup";
import { createToast } from "mosha-vue-toastify";
import { useMutation } from "vue-query";

export const useSignup = () => {
	const signupMutation = useMutation(
		(credentials: SignUpInput) => signUpUserFn(credentials),
		{
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
			onSuccess: (data) => {
				router.push({ name: "confirmation-creation-compte" });
				createToast(data.message, {
					position: "top-right"
				});
			}
		}
	);

	return {
		signupMutation
	};
};
