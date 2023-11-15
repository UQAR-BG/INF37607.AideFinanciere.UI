<template>
	<div>
		<form class="form half" @submit.prevent="onSubmit">
			<Block class="full">
				<InputGroup
					type="text"
					label="Numéro d’assurance sociale"
					id="nas"
					placeholder="012 345 678"
					:disabled="firstPartDisabled"
					:errorMessage="errors.nas"
				/>
				<InputGroup
					type="date"
					label="Date de naissance"
					id="birthdate"
					:disabled="firstPartDisabled"
					:errorMessage="errors.birthdate"
				/>
			</Block>
			<Block class="full">
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
			</Block>
			<button class="submit-btn" type="submit">Soumettre</button>
			<span class="text-xs form-span"
				>Vous possédez déjà un compte ?<router-link
					to="/"
					class="text-xs text-font-link ml-2 font-normal underline"
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
	import type { SignupStudentInfo } from "@/types/student";

	type propType = {
		values: SignupStudentInfo;
		firstPartDisabled: boolean;
	};

	const props = defineProps<propType>();

	const { handleSubmit, errors, resetForm } = useForm({
		validationSchema: toTypedSchema(signupSchema),
		initialValues: props.values
	});

	const { signupMutation } = useSignup();

	const onSubmit = handleSubmit((values) => {
		signupMutation.mutate({
			nas: values.nas,
			birthdate: values.birthdate,
			password: values.password,
			passwordConfirm: values.passwordConfirm
		});

		resetForm();
	});
</script>
