import http from "@/utils/http";

export const useHttp = () => {
	const BASE_URL = "http://localhost:8000/api/";

	const httpService = http.create({
		baseURL: BASE_URL,
		withCredentials: true
	});

	return {
		httpService
	};
};
