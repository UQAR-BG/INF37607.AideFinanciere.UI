<template>
	<section>
		<DataGroup
			label="Code permanent"
			id="codePermanent"
			:data="studentInfo?.codePermanent"
		/>
		<Block class="full inline">
			<DataGroup
				label="Numéro d'assurance sociale"
				id="nas"
				:data="studentInfo?.nas"
			/>
			<DataGroup
				label="Date de naissance"
				id="birthdate"
				:data="studentInfo?.birthdate"
			/>
		</Block>
	</section>
	<form class="form full" @submit.prevent="onSubmit">
		<Block class="full inline">
			<InputGroup
				type="text"
				label="Prénom"
				id="firstname"
				:errorMessage="errors.firstname"
				:disabled="disabled"
			/>
			<InputGroup
				type="text"
				label="Nom"
				id="lastname"
				:errorMessage="errors.lastname"
				:disabled="disabled"
			/>
		</Block>
		<Block class="full inline">
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
		</Block>
		<Block class="full">
			<InputGroup
				type="text"
				label="Adresse de correspondance"
				id="address"
				:errorMessage="errors.address"
				:disabled="disabled"
			/>
		</Block>
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
	const studentInfo = computed(() => studentInfoQuery.data?.value);

	const { handleSubmit, errors, resetForm } = useForm({
		validationSchema: toTypedSchema(studentInfoSchema),
		initialValues: studentInfoQuery.data
	});

	const onSubmit = handleSubmit((values) => {
		studentInfoMutation.mutate({
			firstname: values.firstname,
			lastname: values.lastname,
			address: values.address,
			phoneNumber: values.phoneNumber,
			email: values.email
		});
		resetForm();
		emit("toggleMode");
	});
</script>
