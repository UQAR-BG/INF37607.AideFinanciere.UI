import {
	type FinancialAid,
	type FinancialAidClaim,
	type FinancialAidResponse,
	type FinancialAidClaimStatusChangeResponse
} from "@/types/financialAid";
import { useHttp } from "@/composables/useHttp";

export const getAllFinancialAids = async (): Promise<FinancialAid[]> => {
	const { httpService, authorizeHeader } = useHttp();

	const response = await httpService.get<FinancialAid[]>(
		"FinancialAide",
		authorizeHeader
	);
	console.log(response.data);
	return response.data;
};

export const getActiveFinancialAidClaims = async (): Promise<
	FinancialAidClaim[]
> => {
	const { httpService, authorizeHeader } = useHttp();

	const response = await useHttp().httpService.get<FinancialAidClaim[]>(
		"request/active",
		authorizeHeader
	);
	return response.data;
};

export const updateFinancialAidClaim = async (
	claim: FinancialAidClaim
): Promise<FinancialAidResponse> => {
	const { httpService, authorizeHeader } = useHttp();

	const response = await useHttp().httpService.patch<FinancialAidResponse>(
		"request/save",
		claim,
		authorizeHeader
	);
	return response.data;
};

export const completeFinancialAidClaim = async (
	claim: FinancialAidClaim
): Promise<FinancialAidClaimStatusChangeResponse> => {
	const { httpService, authorizeHeader } = useHttp();

	const response =
		await useHttp().httpService.put<FinancialAidClaimStatusChangeResponse>(
			"request/complete",
			claim,
			authorizeHeader
		);
	return response.data;
};

export const cancelFinancialAidClaim =
	async (): Promise<FinancialAidClaimStatusChangeResponse> => {
		const { httpService, authorizeHeader } = useHttp();

		const response =
			await useHttp().httpService.patch<FinancialAidClaimStatusChangeResponse>(
				"request/cancel",
				{},
				authorizeHeader
			);
		return response.data;
	};
