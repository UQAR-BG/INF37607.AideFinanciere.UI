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
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { toast } from "vue3-toastify";

export const useFinancialAssistance = (codePermanent?: string) => {
	const queryClient = useQueryClient();
	const { getFullYear } = useDate();
	const router = useRouter();

	const allFinancialAidsQuery = useQuery({
		queryKey: ["financialAids", codePermanent],
		queryFn: () => getAllFinancialAids(),
		enabled: codePermanent !== null,
		staleTime: 1000 * 60 * 5,
		retry: 3
	});

	const filterFinancialAids = (filters: FinancialAidFilters) => {
		const allTypes: boolean = filters.type === 0;

		return allFinancialAidsQuery.data?.value?.filter(
			(a) =>
				(allTypes ? true : a.type === filters.type) &&
				getFullYear(a.paymentDate) === filters.year
		);
	};

	const activeFinancialAidClaimsQuery = useQuery({
		queryKey: ["activeClaims"],
		queryFn: () => getActiveFinancialAidClaims(),
		enabled: codePermanent !== null,
		staleTime: 1000 * 60 * 5,
		retry: 3
	});

	const financialAidClaimMutation = useMutation({
		mutationFn: (claim: FinancialAidClaim) => updateFinancialAidClaim(claim),
		onError: (error) => {
			if (Array.isArray(error as any)) {
				(error as any).forEach((el: any) =>
					toast.warn(el.message, {
						position: toast.POSITION.TOP_RIGHT
					})
				);
			} else {
				toast.error((error as any).response.data.message, {
					position: toast.POSITION.TOP_RIGHT
				});
			}
		},
		onSuccess: () => {
			queryClient.refetchQueries({ queryKey: ["activeClaims"] });
			toast.success("Demande d'aide financière modifiée avec succès", {
				position: toast.POSITION.TOP_RIGHT
			});
		}
	});

	const completeClaimMutation = useMutation({
		mutationFn: (claim: FinancialAidClaim) => completeFinancialAidClaim(claim),
		onSuccess: () => {
			router.push("/dossier");
		}
	});

	const cancelClaimMutation = useMutation({
		mutationFn: () => cancelFinancialAidClaim(),
		onSuccess: () => {
			queryClient.refetchQueries({ queryKey: ["activeClaims"] });
			toast.success("Demande d'aide financière annulée avec succès", {
				position: toast.POSITION.TOP_RIGHT
			});
		}
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

	const isActiveFinancialAidClaim = computed<boolean>(() => {
		console.log(activeFinancialAidClaimsQuery.data?.value);
		return activeFinancialAidClaimsQuery.data?.value.length > 0;
	});

	const pendingFinancialAidClaim = computed<FinancialAidClaim>(() =>
		activeFinancialAidClaimsQuery.data?.value?.find(() => true)
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
