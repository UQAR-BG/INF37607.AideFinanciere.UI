import { getAllFinancialAids } from "@/api/financialAssistanceApi";
import { FinancialAidType, type FinancialAid } from "@/types/financialAid";
import { useQuery } from "vue-query";

export const useFinancialAssistance = (codePermanent: string) => {
	const allFinancialAidsQuery = useQuery(
		["financialAids", codePermanent],
		() => getAllFinancialAids(codePermanent),
		{
			staleTime: 1000 * 60 * 5,
			retry: 3
		}
	);

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

	return {
		allFinancialAidsQuery,
		grants,
		loans,
		grantSum,
		loanSum
	};
};
