import { loginUserFn } from "@/api/authApi";
import type { LoginInput, LoginResponse } from "@/types/auth/login";
import { useMutation } from "@tanstack/vue-query";
import { toast, type ToastOptions } from "vue3-toastify";

export const useLogin = () => {
	const router = useRouter();
	const authStore = useAuthStore();

	const loginMutation = useMutation({
		mutationFn: (credentials: LoginInput) => loginUserFn(credentials),
		onError: (error) => {
			if (Array.isArray(error as any)) {
				(error as any).forEach((el: any) =>
					toast(el.message, {
						autoClose: 3000,
						position: toast.POSITION.TOP_RIGHT,
						type: "error"
					} as ToastOptions)
				);
			} else {
				toast("Codes d'accès invalides", {
					autoClose: 3000,
					position: toast.POSITION.TOP_RIGHT,
					type: "error"
				} as ToastOptions);
			}
		},
		onSuccess: (data: LoginResponse) => {
			authStore.setAuthUser(data);

			router.push({ name: "dossier" });
		}
	});

	return {
		loginMutation
	};
};
