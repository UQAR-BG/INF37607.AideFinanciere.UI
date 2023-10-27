import { getMeFn } from "@/api/authApi";
import { useQuery } from "vue-query";

export const useAuth = () => {
	const authUserQuery = useQuery("authUser", () => getMeFn(), {
		enabled: false,
		retry: 1
	});

	return {
		authUserQuery
	};
};
