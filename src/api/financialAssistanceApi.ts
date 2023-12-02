import {
	type FinancialAid,
	type FinancialAidClaim,
	FinancialAidClaimStatus,
	type FinancialAidResponse,
	type FinancialAidClaimStatusChangeResponse
} from "@/types/financialAid";
import { useHttp } from "@/composables/useHttp";

const activeFinancialAidClaims: FinancialAidClaim[] = [
	{
		id: 1,
		codePermanentDemandeur: "TEST012345",
		studentId: 3,
		firstname: "John",
		lastname: "Doe",
		phoneNumber: "418-202-8998",
		credits: 45,
		status: FinancialAidClaimStatus.Pending
	}
];

export const getAllFinancialAids = async (): Promise<FinancialAid[]> => {
	const { httpService, authorizeHeader } = useHttp();

	const response = await httpService.get<FinancialAid[]>(
		"FinancialAide",
		authorizeHeader
	);
	console.log(response.data);
	return response.data;
};

export const getActiveFinancialAidClaims = async (
	codePermanent: string
): Promise<FinancialAidClaim[]> => {
	// const response = await useHttp().httpService.get<FinancialAidClaimResponse>(
	// 	"aide-financiere/claim/active"
	// );
	// return response.data;

	return new Promise((resolve) => {
		resolve(activeFinancialAidClaims);
	});
};

export const updateFinancialAidClaim = async (
	claim: FinancialAidClaim
): Promise<FinancialAidResponse> => {
	const response = await useHttp().httpService.patch<FinancialAidResponse>(
		"aide-financiere/claim",
		claim
	);
	return response.data;
};

export const completeFinancialAidClaim = async (
	claimId: number
): Promise<FinancialAidClaimStatusChangeResponse> => {
	const response =
		await useHttp().httpService.post<FinancialAidClaimStatusChangeResponse>(
			"aide-financiere/claim/complete",
			claimId
		);
	return response.data;
};

export const cancelFinancialAidClaim = async (
	claimId: number
): Promise<FinancialAidClaimStatusChangeResponse> => {
	const response =
		await useHttp().httpService.post<FinancialAidClaimStatusChangeResponse>(
			"aide-financiere/claim/cancel",
			claimId
		);
	return response.data;
};
