import {
	completeFinancialAidClaim,
	getActiveFinancialAidClaims,
	getAllFinancialAids,
	updateFinancialAidClaim,
	cancelFinancialAidClaim
} from "@/api/financialAssistanceApi";
import { defaultValues, type FinancialAidFilters } from "@/types/filters";
import {
	FinancialAidType,
	type FinancialAid,
	type FinancialAidClaim
} from "@/types/financialAid";
import * as Toast from "mosha-vue-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";

export const useFinancialAssistance = (codePermanent?: string) => {
	const queryClient = useQueryClient();

	const allFinancialAidsQuery = useQuery({
		queryKey: ["financialAids", codePermanent],
		queryFn: () => getAllFinancialAids(codePermanent),
		enabled: codePermanent !== null,
		staleTime: 1000 * 60 * 5,
		retry: 3
	});

	const filterFinancialAids = (filters: FinancialAidFilters) => {
		const allTypes: boolean = filters.type === 0;

		return allFinancialAidsQuery.data?.value?.filter(
			(a) =>
				(allTypes ? true : a.type === filters.type) &&
				a.date.getFullYear() === filters.year
		);
	};

	const activeFinancialAidClaimsQuery = useQuery({
		queryKey: ["activeClaims"],
		queryFn: () => getActiveFinancialAidClaims(codePermanent),
		enabled: codePermanent !== null,
		staleTime: 1000 * 60 * 5,
		retry: 3
	});

	const financialAidClaimMutation = useMutation({
		mutationFn: (claim: FinancialAidClaim) => updateFinancialAidClaim(claim),
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
			queryClient.refetchQueries({ queryKey: ["activeClaims"] });
			Toast.createToast("Demande d'aide financière modifiée avec succès", {
				position: "top-right"
			});
		}
	});

	const completeClaimMutation = useMutation({
		mutationFn: (claimId: number) => completeFinancialAidClaim(claimId)
	});

	const cancelClaimMutation = useMutation({
		mutationFn: (claimId: number) => cancelFinancialAidClaim(claimId)
	});

	const grants = computed<FinancialAid[]>(() =>
		allFinancialAidsQuery.data?.value?.filter(
			(a) => a.type === FinancialAidType.Grant
		)
	);

	const loans = computed<FinancialAid[]>(() =>
		allFinancialAidsQuery.data?.value?.filter(
			(a) => a.type === FinancialAidType.Loan
		)
	);

	const grantSum = computed<number>(() =>
		grants.value?.reduce((a, c) => a + c.amount, 0)
	);

	const loanSum = computed<number>(() =>
		loans.value?.reduce((a, c) => a + c.amount, 0)
	);

	const isActiveFinancialAidClaim = computed<boolean>(
		() => activeFinancialAidClaimsQuery.data?.value.length > 0
	);

	const pendingFinancialAidClaim = computed<FinancialAidClaim>(
		() => activeFinancialAidClaimsQuery.data?.value[0]
	);

	const filterValues = reactive(defaultValues);

	const formatType = (type: FinancialAidType) => {
		return type === FinancialAidType.Grant ? "Bourse" : "Prêt";
	};

	return {
		allFinancialAidsQuery,
		filterFinancialAids,
		activeFinancialAidClaimsQuery,
		financialAidClaimMutation,
		completeClaimMutation,
		cancelClaimMutation,
		grants,
		loans,
		grantSum,
		loanSum,
		filterValues,
		isActiveFinancialAidClaim,
		pendingFinancialAidClaim,
		formatType
	};
};
