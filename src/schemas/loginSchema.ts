import * as zod from "zod";

export const loginSchema = zod.object({
	codePermanent: zod
		.string({ required_error: "Le code permanent est requis" })
		.min(1, "Le code permanent est requis"),
	password: zod
		.string({ required_error: "Le mot de passe est requis" })
		.min(1, "Le mot de passe est requis")
		.min(8, "Le mot de passe doit faire au moins 8 caractères")
});
