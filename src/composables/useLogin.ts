import { loginUserFn } from "@/api/authApi";
import type { LoginInput } from "@/types/auth/login";
import * as Toast from "mosha-vue-toastify";
import { useMutation, useQueryClient } from "@tanstack/vue-query";

export const useLogin = () => {
	const queryClient = useQueryClient();
	const router = useRouter();

	const loginMutation = useMutation({
		mutationFn: (credentials: LoginInput) => loginUserFn(credentials),
		onError: (error) => {
			if (Array.isArray(error as any)) {
				(error as any).forEach((el: any) =>
					Toast.createToast(el.message, {
						position: "top-right",
						type: "warning"
					})
				);
			} else {
				Toast.createToast((error as any).message, {
					position: "top-right",
					type: "danger"
				});
			}
		},
		onSuccess: () => {
			queryClient.refetchQueries({ queryKey: ["authUser"] });
			Toast.createToast("Indentification réussie", {
				position: "top-right"
			});
			router.push({ name: "dossier" });
		}
	});

	return {
		loginMutation
	};
};
