import type { Student } from "./student";

export enum FinancialAidType {
	Loan = 1,
	Grant
}

export enum FinancialAidClaimStatus {
	Pending,
	Completed,
	Rejected,
	Cancelled
}

export type FinancialAidClaim = {
	id?: number;
	codePermanentDemandeur?: string;
	codeEtablissement?: string;
	codeProgramme?: string;
	email?: string;
	correspondenceAddress?: string;
	firstname?: string;
	lastname?: string;
	phoneNumber?: string;
	secondPhoneNumber?: string;
	citizenship?: string;
	immigrationCode?: string;
	dateStatus?: Date;
	language?: string;
	institutionName?: string;
	institutionCode?: string;
	programmeCode?: string;
	creditsNumbers?: number;
	maritalStatus?: string;
	statusStartingDate?: Date;
	totalGrossIncome?: number;
	lastYearOtherIncome?: number;
	currentYearPotentialIncome?: number;
	status?: FinancialAidClaimStatus;
};

export type FinancialAid = {
	id: number;
	type: FinancialAidType;
	amount: number;
	paymentDate: Date;
};

export type FinancialAidResponse = {
	status: string;
	data: {
		financialAid: FinancialAid;
	};
};

export const FinancialAidTypeMap = [
	
]

export const FinancialAidMaritalStatusFilter = [
	"Célibataire ",
	"Marié",
	"Veuf et non remarié",
	"Divorcé et non remarié",
	" Marié, mais séparé"
];

export type FinancialAidMaritalStatus = {
	maritalStatus: string;
};

export const defaultValues: FinancialAidClaim & FinancialAidMaritalStatus = {
	maritalStatus: FinancialAidMaritalStatusFilter[0]
};

export type FinancialAidClaimResponse = {
	status: string;
	data: {
		financialAidClaims: FinancialAidClaim[];
	};
};

export type FinancialAidClaimStatusChangeResponse = {
	status: string;
	data: {
		success: boolean;
	};
};
