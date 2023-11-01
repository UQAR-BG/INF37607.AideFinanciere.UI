<template>
	<div>
		<form class="form half" @submit.prevent="onSubmit">
			<InputGroup
				type="text"
				label="Numéro d’assurance sociale"
				id="assuranceSociale"
				placeholder="012 345 678"
				:errorMessage="errors.assuranceSociale"
			/>
			<InputGroup
				type="date"
				label="Date de naissance"
				id="birthdate"
				:errorMessage="errors.birthdate"
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
	import { firstPartSignupSchema } from "@/schemas/signupSchema";
	import { useStudent } from "@/composables/useStudent";

	const { handleSubmit, errors, values } = useForm({
		validationSchema: toTypedSchema(firstPartSignupSchema)
	});

	const emit = defineEmits(["firstPartValidated"]);

	const { validateStudentInfoMutation } = useStudent();

	const validation = ref(() => validateStudentInfoMutation.data?.value);

	const onSubmit = handleSubmit((values) => {
		validateStudentInfoMutation.mutate({
			nas: values.assuranceSociale,
			birthdate: values.birthdate
		});
	});

	watch(validation.value, (newValue) => {
		console.log(newValue);

		if (newValue.data.valid) {
			emit("firstPartValidated", values);
		} else {
			errors.value.birthdate = validateStudentInfoMutation.error?.value as string;
		}
	});
</script>
