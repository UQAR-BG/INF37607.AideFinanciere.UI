<template>
	<form class="form" @submit.prevent="onSubmit">
		<InputGroup
			type="text"
			label="Adresse de correspondance"
			id="address"
			:errorMessage="errors.address"
			:disabled="disabled"
		/>
		<InputGroup
			type="text"
			label="Numéro de téléphone"
			id="phoneNumber"
			:errorMessage="errors.phoneNumber"
			:disabled="disabled"
		/>
		<InputGroup
			type="text"
			label="Adresse de courriel"
			id="email"
			:errorMessage="errors.email"
			:disabled="disabled"
		/>
		<button
			class="submit-btn"
			type="button"
			v-if="disabled"
			@click="$emit('toggleMode')"
		>
			Modifier
		</button>
		<div class="btn-group" v-if="!disabled">
			<button class="cancel-btn" type="button" @click="$emit('toggleMode')">
				Annuler
			</button>
			<button class="submit-btn" type="submit">Soumettre</button>
		</div>
	</form>
</template>

<script setup lang="ts">
	import { toTypedSchema } from "@vee-validate/zod";
	import { useForm } from "vee-validate";
	import { studentInfoSchema } from "@/schemas/studentInfoSchema";
	import { useStudent } from "@/composables/useStudent";

	defineProps({
		disabled: {
			type: Boolean,
			default: false
		}
	});

	const emit = defineEmits(["toggleMode"]);

	const { studentInfoQuery, studentInfoMutation } = useStudent();

	const { handleSubmit, errors, resetForm } = useForm({
		validationSchema: toTypedSchema(studentInfoSchema),
		initialValues: studentInfoQuery.data
	});

	const onSubmit = handleSubmit((values) => {
		studentInfoMutation.mutate({
			address: values.address,
			phoneNumber: values.phoneNumber,
			email: values.email
		});
		resetForm();
		emit("toggleMode");
	});
</script>
