import type { Student } from "./student";

export enum FinancialAidType {
	Loan,
	Grant
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
