<template>
	<div>
		<form class="form half" @submit.prevent="onSubmit">
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
	import { signupSchema, firstPartSignupSchema } from "@/schemas/signupSchema";
	import { useSignup } from "@/composables/useSignup";

	type propType = {
		values: {
			assuranceSociale?: string;
			birthdate?: Date;
		};
	};

	const props = defineProps<propType>();

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
