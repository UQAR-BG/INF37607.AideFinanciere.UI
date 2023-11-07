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
	studentId?: number;
	student?: Student;
	firstname?: string;
	lastname?: string;
	phoneNumber?: string;
	secondPhoneNumber?: string;
	citizenship?: string;
	immigrationCode?: string;
	residentStatusDate?: Date;
	language?: string;
	schoolName?: string;
	schoolCode?: string;
	programCode?: string;
	credits?: number;
	maritalStatus?: string;
	maritalStatusStartDate?: Date;
	lastYearMainIncome?: number;
	lastYearOtherIncome?: number;
	currentYearPotentialIncome?: number;
	status?: FinancialAidClaimStatus;
};

export type FinancialAid = {
	id: number;
	type: FinancialAidType;
	amount: number;
	date: Date;
	claimId: number;
};

export type FinancialAidResponse = {
	status: string;
	data: {
		financialAid: FinancialAid;
	};
};

export type FinancialAidClaimResponse = {
	status: string;
	data: {
		financialAidClaims: FinancialAidClaim[];
	};
};
