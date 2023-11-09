<template>
	<div>
		<form class="form half" @submit.prevent="onSubmit">
			<InputGroup
				type="text"
				label="Numéro d’assurance sociale"
				id="nas"
				placeholder="012 345 678"
				:errorMessage="errors.nas"
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

	const { mutate, isSuccess, isError, error } =
		useStudent().validateStudentInfoMutation;

	const onSubmit = handleSubmit((values) => {
		mutate({
			nas: values.nas,
			birthdate: values.birthdate
		});
	});

	watch(isSuccess, () => {
		if (isSuccess.value) {
			emit("firstPartValidated", values);
		}
	});

	watch(isError, () => {
		errors.value.birthdate = error?.value.message;
	});
</script>
