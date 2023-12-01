import { signUpUserFn } from "@/api/authApi";
import type { SignUpInput, SignupResponse } from "@/types/auth/signup";
import { useMutation } from "@tanstack/vue-query";
import { toast } from "vue3-toastify";

export const useSignup = () => {
	const router = useRouter();

	const signupMutation = useMutation({
		mutationFn: (credentials: SignUpInput) => signUpUserFn(credentials),
		onError: (error) => {
			if (Array.isArray((error as any).response.data.error)) {
				(error as any).response.data.error.forEach((el: any) =>
					toast.warn(el.message, {
						position: toast.POSITION.TOP_RIGHT
					})
				);
			} else {
				toast.error((error as any).response.data.message, {
					position: toast.POSITION.TOP_RIGHT
				});
			}
		},
		onSuccess: (response: SignupResponse) => {
			router.push({
				path: `/confirmation-creation-compte/${response.permanentCode}`,
				query: { message: "Le compte étudiant a été créé avec succès." }
			});
		}
	});

	return {
		signupMutation
	};
};
