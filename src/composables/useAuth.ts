import { getMeFn } from "@/api/authApi";
import { useQuery } from "@tanstack/vue-query";

export const useAuth = () => {
	const authUserQuery = useQuery({
		queryKey: ["authUser"],
		queryFn: () => getMeFn(),
		enabled: false,
		retry: 1
	});

	return {
		authUserQuery
	};
};
