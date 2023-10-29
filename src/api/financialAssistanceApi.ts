import axios from "axios";

import { FinancialAidType, type FinancialAid } from "@/types/financialAid";

const BASE_URL = "http://localhost:8000/api/";

const financialAidsApi = axios.create({
	baseURL: BASE_URL,
	withCredentials: true
});

financialAidsApi.defaults.headers.common["Content-Type"] = "application/json";

const financialAids: FinancialAid[] = [
	{
		id: 1,
		type: FinancialAidType.Grant,
		amount: 1000,
		date: new Date(2023, 10, 25),
		claimId: 1
	},
	{
		id: 2,
		type: FinancialAidType.Loan,
		amount: 500,
		date: new Date(2023, 7, 10),
		claimId: 2
	},
	{
		id: 3,
		type: FinancialAidType.Grant,
		amount: 750,
		date: new Date(2022, 4, 14),
		claimId: 3
	},
	{
		id: 4,
		type: FinancialAidType.Loan,
		amount: 250,
		date: new Date(2021, 11, 11),
		claimId: 4
	},
	{
		id: 5,
		type: FinancialAidType.Grant,
		amount: 2500,
		date: new Date(2023, 2, 30),
		claimId: 5
	}
];

export const getAllFinancialAids = async (
	codePermanent: string
): Promise<FinancialAid[]> => {
	// const response = await studentApi.get<FinancialAid[]>("student");
	// return response.data;

	return new Promise((resolve) => {
		resolve(financialAids);
	});
};
