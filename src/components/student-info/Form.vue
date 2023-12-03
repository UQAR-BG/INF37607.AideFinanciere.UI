<template>
	<section>
		<DataGroup
			label="Code permanent"
			id="codePermanent"
			:data="studentInfo?.permanentCode"
		/>
		<Block
			class="w-full flex content-start items-center gap-x-12 [&>*]:basis-2/4"
		>
			<DataGroup
				label="Numéro d'assurance sociale"
				id="nas"
				:data="studentInfo?.socialInsuranceNumber"
			/>
			<DataGroup
				label="Date de naissance"
				id="birthdate"
				:data="studentInfo?.dateOfBirth"
				:isDate="true"
			/>
		</Block>
	</section>
	<form class="form w-full" @submit.prevent="onSubmit">
		<Block
			class="w-full flex content-start items-center gap-x-12 [&>*]:basis-2/4"
		>
			<InputGroup
				type="text"
				label="Prénom"
				id="firstName"
				:errorMessage="errors.firstName"
				:disabled="disabled"
			/>
			<InputGroup
				type="text"
				label="Nom"
				id="lastName"
				:errorMessage="errors.lastName"
				:disabled="disabled"
			/>
		</Block>
		<Block
			class="w-full flex content-start items-center gap-x-12 [&>*]:basis-2/4"
		>
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
		<Block class="w-full">
			<InputGroup
				type="text"
				label="Adresse de correspondance"
				id="correspondenceAddress"
				:errorMessage="errors.correspondenceAddress"
				:disabled="disabled"
			/>
		</Block>
		<button
			class="text-font-pale/[.9] border border-solid border-submit-border bg-submit py-1.5 px-3 transition-all duration-200 hover:bg-submit-hover"
			type="button"
			v-if="disabled"
			@click="$emit('toggleMode')"
		>
			Modifier
		</button>
		<div class="btn-group" v-if="!disabled">
			<button
				class="text-font-dark/[.9] border border-solid border-cancel-border bg-cancel py-1.5 px-3 mr-4 transition-all duration-200 hover:bg-cancel-hover"
				type="button"
				@click="$emit('toggleMode')"
			>
				Annuler
			</button>
			<button
				class="text-font-pale/[.9] border border-solid border-submit-border bg-submit py-1.5 px-3 transition-all duration-200 hover:bg-submit-hover"
				type="submit"
			>
				Soumettre
			</button>
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
		initialValues: studentInfo
	});

	const onSubmit = handleSubmit((values) => {
		studentInfoMutation.mutate({
			firstName: values.firstName,
			lastName: values.lastName,
			correspondenceAddress: values.correspondenceAddress,
			phoneNumber: values.phoneNumber,
			email: values.email
		});
		resetForm();
		emit("toggleMode");
	});

	await studentInfoQuery.suspense();
</script>
