<template>
	<div>
		<form class="form w-2/4" @submit.prevent="onSubmit">
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
			<button
				class="text-font-pale/[.9] border border-solid border-submit-border bg-submit py-1.5 px-3 transition-all duration-200 hover:bg-submit-hover"
				type="submit"
			>
				Soumettre
			</button>
			<span class="text-xs block text-end"
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
