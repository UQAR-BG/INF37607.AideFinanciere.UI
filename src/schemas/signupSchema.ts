/* REGEX: https://stackoverflow.com/questions/20082855/regular-expression-for-canadian-sin-social-insurance-number */

import * as zod from "zod";

export const signupSchema = zod
	.object({
		assuranceSociale: zod
			.string({ required_error: "Le numéro d'assurance sociale est requis" })
			.min(9, "Le numéro d'assurance sociale est requis")
			.regex(
				new RegExp("^(d{3}-d{3}-d{3})|(d{3} d{3} d{3})|(d{9})$"),
				"Le format du NAS doit respecter les formes standards:\n111222333\n111 222 333\n111-222-333"
			),
		birthdate: zod
			.string({ required_error: "La date de naissance est requise" })
			.min(1, "La date de naissance est requise")
			.datetime(),
		password: zod
			.string({ required_error: "Le mot de passe est requis" })
			.min(1, "Le mot de passe est requis")
			.min(8, "Le mot de passe doit faire au moins 8 caractères")
			.max(300, "Le mot de passe ne peut faire plus de 300 caractères"),
		passwordConfirm: zod
			.string({ required_error: "Veuillez confirmer le mot de passe" })
			.min(1, "Veuillez confirmer le mot de passe")
	})
	.refine((data) => data.password === data.passwordConfirm, {
		path: ["passwordConfirm"],
		message: "Les mots de passe ne sont pas identiques"
	});
