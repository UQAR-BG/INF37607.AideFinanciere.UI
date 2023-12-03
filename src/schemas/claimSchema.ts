import * as zod from "zod";

export const claimSchema = zod.object({
	firstName: zod.string().optional(),
	lastName: zod.string().optional(),
	socialInsuranceNumber: zod.string().optional(),
	correspondenceAddress: zod.string().optional(),
	citizenship: zod.string().optional(),
	immigrationCode: zod.string().optional(),
	dateStatus: zod.coerce
		.date({
			required_error: "La date de naissance est requise",
			invalid_type_error: "Le format de la date de naissance est invalide"
		})
		.min(new Date("1900-01-01"), { message: "Trop vieux" })
		.max(new Date(), { message: "Trop jeune" }),
	statusStartingDate: zod.coerce
		.date({
			required_error: "La date de naissance est requise",
			invalid_type_error: "Le format de la date de naissance est invalide"
		})
		.min(new Date("1900-01-01"), { message: "Trop vieux" })
		.max(new Date(), { message: "Trop jeune" }),
	language: zod.string().optional(),
	institutionName: zod.string().optional(),
	institutionCode: zod.string().optional(),
	programmeCode: zod.string().optional(),
	creditsNumbers: zod.number().optional(),
	totalGrossIncome: zod.number().optional(),
	email: zod
		.string()
		.optional()
		.or(zod.string().email("L'adresse courriel est invalide")),
	phoneNumber: zod
		.string()
		.optional()
		.or(
			zod
				.string()
				.regex(
					/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
					"Le numéro de téléphone est invalide"
				)
		),
	secondPhoneNumber: zod
		.string()
		.optional()
		.or(
			zod
				.string()
				.regex(
					/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
					"Le numéro de téléphone est invalide"
				)
		)
});
