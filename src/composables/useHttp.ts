import http from "@/utils/http";

export const useHttp = () => {
	const config = useRuntimeConfig();
	const store = useAuthStore();

	const httpService = http.create({
		baseURL: config.public.apiBase,
		withCredentials: true
	});

	const authorizeHeader = {
		headers: {
			Authorization: "Bearer " + store.token
		}
	};

	return {
		httpService,
		authorizeHeader
	};
};
