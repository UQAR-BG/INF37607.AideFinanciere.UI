/* REGEX: https://stackoverflow.com/questions/20082855/regular-expression-for-canadian-sin-social-insurance-number */

import * as zod from "zod";

export const firstPartSignupSchema = zod.object({
	assuranceSociale: zod
		.string({ required_error: "Le numéro d'assurance sociale est requis" })
		.min(9, "Le numéro d'assurance sociale est requis")
		.regex(
			/^(\d{3}-\d{3}-\d{3})|(\d{3} \d{3} \d{3})|(\d{9})$/,
			"Le format du NAS doit respecter les formes standards"
		),
	birthdate: zod.coerce
		.date({
			required_error: "La date de naissance est requise",
			invalid_type_error: "Le format de la date de naissance est invalide"
		})
		.min(new Date("1900-01-01"), { message: "Trop vieux" })
		.max(new Date(), { message: "Trop jeune" })
});

export const signupSchema = zod
	.object({
		assuranceSociale: zod
			.string({ required_error: "Le numéro d'assurance sociale est requis" })
			.min(9, "Le numéro d'assurance sociale est requis")
			.regex(
				/^(\d{3}-\d{3}-\d{3})|(\d{3} \d{3} \d{3})|(\d{9})$/,
				"Le format du NAS doit respecter les formes standards"
			),
		birthdate: zod.coerce
			.date({
				required_error: "La date de naissance est requise",
				invalid_type_error: "Le format de la date de naissance est invalide"
			})
			.min(new Date("1900-01-01"), { message: "Trop vieux" })
			.max(new Date(), { message: "Trop jeune" }),
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
