import http from "@/utils/http";

export const useHttp = () => {
	const config = useRuntimeConfig();

	const httpService = http.create({
		baseURL: config.public.apiBase,
		withCredentials: true
	});

	return {
		httpService
	};
};
