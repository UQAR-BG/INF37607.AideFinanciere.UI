import * as zod from "zod";

export const studentInfoSchema = zod.object({
	firstname: zod.string().optional(),
	lastname: zod.string().optional(),
	address: zod.string().optional(),
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
		)
});
