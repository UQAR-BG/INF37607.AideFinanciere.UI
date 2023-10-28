<template>
	<div>
		<form class="form" @submit.prevent="onSubmit">
			<InputGroup
				type="text"
				label="Numéro d’assurance sociale"
				id="assuranceSociale"
				placeholder="012 345 678"
				:errorMessage="errors.assuranceSociale"
			/>
			<InputGroup
				type="datetime-local"
				label="Date de naissance"
				id="birthdate"
				:errorMessage="errors.birthdate"
			/>
			<InputGroup
				type="password"
				label="Mot de passe"
				id="password"
				:errorMessage="errors.password"
			/>
			<InputGroup
				type="password"
				label="Confirmer le mot de passe"
				id="passwordConfirm"
				:errorMessage="errors.passwordConfirm"
			/>
			<button class="submit-btn" type="submit">Soumettre</button>
			<span class="small-label form-span"
				>Vous possédez déjà un compte ?<router-link
					to="/"
					class="small-label form-link"
					>Aller à l'identification</router-link
				></span
			>
		</form>
	</div>
</template>

<script setup lang="ts">
	import { toTypedSchema } from "@vee-validate/zod";
	import { useForm } from "vee-validate";
	import { signupSchema } from "@/schemas/signupSchema";
	import { useSignup } from "@/composables/useSignup";

	const { handleSubmit, errors, resetForm } = useForm({
		validationSchema: toTypedSchema(signupSchema)
	});

	const { signupMutation } = useSignup();

	const onSubmit = handleSubmit((values) => {
		signupMutation.mutate({
			assuranceSociale: values.assuranceSociale,
			birthdate: values.birthdate,
			password: values.password,
			passwordConfirm: values.passwordConfirm
		});
		resetForm();
	});
</script>
