<template>
	<section>
		<DataGroup
			label="Code permanent"
			id="codePermanent"
			:data="studentInfo?.codePermanent"
		/>
		<Block
			class="w-full flex content-start items-center gap-x-12 [&>*]:basis-2/4"
		>
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
	<form class="form w-full" @submit.prevent="onSubmit">
		<Block
			class="w-full flex content-start items-center gap-x-12 [&>*]:basis-2/4"
		>
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
				id="address"
				:errorMessage="errors.address"
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

	await studentInfoQuery.suspense();
</script>
