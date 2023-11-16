<template>
	<form
		class="form w-full"
		@submit.prevent="onSubmit"
		@ResquetInWork="useResquetInWork"
	>
		<!-- Identité de l’étudiant -->
		<div class="pb-2 border-b border-solid border-font-dark/[.3] font-bold">
			<span>Identité</span>
		</div>
		<div class="flex justify-between items-center mt-4">
			<section>
				<Block
					class="w-full flex content-start items-center gap-x-12 [&>*]:basis-2/4"
				>
					<DataGroup
						label="Prénom"
						id="firstname"
						:data="studentInfoQuery.data?.value?.firstname"
					/>
					<DataGroup
						label="Nom"
						id="lastname"
						:data="studentInfoQuery.data?.value?.lastname"
					/>
				</Block>
				<DataGroup
					label="Numéro d'assurance sociale"
					id="nas"
					:data="studentInfoQuery.data?.value?.nas"
				/>
			</section>
		</div>

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
				label="Autre numéro de téléphone"
				id="secondPhoneNumber"
				:errorMessage="errors.secondPhoneNumber"
				:disabled="disabled"
			/>
		</Block>
		<Block
			class="w-full flex content-start items-center gap-x-12 [&>*]:basis-2/4"
		>
			<InputGroup
				type="text"
				label="Adresse de courriel"
				id="email"
				:errorMessage="errors.email"
				:disabled="disabled"
			/>

			<InputGroup
				type="text"
				label="Adresse de correspondance"
				id="address"
				:errorMessage="errors.address"
				:disabled="disabled"
			/>
		</Block>
		<Block
			class="w-full flex content-start items-center gap-x-12 [&>*]:basis-2/4"
		>
			<InputGroup
				type="text"
				label="Citoyenneté"
				id="citizenship"
				:errorMessage="errors.citizenship"
				:disabled="disabled"
			/>
			<InputGroup
				type="text"
				label="Code d’immigration"
				id="immigrationCode"
				:errorMessage="errors.immigrationCode"
				:disabled="disabled"
			/>
		</Block>
		<Block
			class="w-full flex content-start items-center gap-x-12 [&>*]:basis-2/4"
		>
			<InputGroup
				type="text"
				label="Date d’obtention du statut de résident permanent ou de réfugié"
				id="residentStatusDate"
				:errorMessage="errors.residentStatusDate"
				:disabled="disabled"
			/>
			<InputGroup
				type="text"
				label="Langue de correspondancen"
				id="language"
				:errorMessage="errors.language"
				:disabled="disabled"
			/>
		</Block>

		<!-- Renseignement scolaire -->
		<div class="pb-2 border-b border-solid border-font-dark/[.3] font-bold">
			<span>Renseignement scolaire</span>
		</div>
		<div class="flex justify-between items-center mt-4"></div>

		<Block
			class="w-full flex content-start items-center gap-x-12 [&>*]:basis-2/4"
		>
			<InputGroup
				type="text"
				label="Nom de l'établissement"
				id="schoolName"
				:errorMessage="errors.schoolName"
				:disabled="disabled"
			/>
			<InputGroup
				type="text"
				label="Code de l'établissement"
				id="codeEtablissement"
				:errorMessage="errors.codeEtablissement"
				:disabled="disabled"
			/>
		</Block>
		<Block
			class="w-full flex content-start items-center gap-x-12 [&>*]:basis-2/4"
		>
			<InputGroup
				type="text"
				label="Code du programme "
				id="codeProgramme"
				:errorMessage="errors.codeProgramme"
				:disabled="disabled"
			/>
			<InputGroup
				type="text"
				label="Nombre de crédits"
				id="credits"
				:errorMessage="errors.credits"
				:disabled="disabled"
			/>
		</Block>

		<!-- Situation de l’étudiant -->
		<div class="pb-2 border-b border-solid border-font-dark/[.3] font-bold">
			<span>Situation de l’étudiant</span>
		</div>
		<div class="flex justify-between items-center mt-4"></div>

		<Block
			class="w-full flex content-start items-center gap-x-12 [&>*]:basis-2/4"
		>
			<label
				class="select after:content-['\25BC'] after:absolute after:top-4 after:right-4 after:pointer-events-none after:transition-all after:duration-300 after:ease-in hover:after:animate-after-bounce hover:after:text-brand"
			>
				<select
					class="basis-4 p-4 cursor-pointer bg-transparent border-none"
					name="maritalStatus"
					id="maritalStatus"
					@change="onSelectChange"
					v-model="maritalStatus"
				>
					<option
						v-for="maritalStatus in FinancialAidMaritalStatusFilter"
						:value="maritalStatus"
					>
						{{ maritalStatus }}
					</option>
				</select>
			</label>
			<InputGroup
				type="date"
				label="Date de début de l'état matrimonial "
				id="maritalStatusStartDate"
				:errorMessage="errors.maritalStatusStartDate"
			/>
		</Block>

		<!-- Ressources financières -->
		<div class="pb-2 border-b border-solid border-font-dark/[.3] font-bold">
			<span>Ressources financières</span>
		</div>
		<div class="flex justify-between items-center mt-4"></div>
		<Block class="w-2/4">
			<InputGroup
				type="text"
				label="Revenu total brute"
				id="lastYearMainIncome"
				:errorMessage="errors.lastYearMainIncome"
			/>
		</Block>

		<div class="btn-group">
			<button
				class="text-font-dark/[.9] border border-solid border-cancel-border bg-cancel py-1.5 px-3 mr-4 transition-all duration-200 hover:bg-cancel-hover"
				type="submit"
				@click="cancel"
			>
				Annuler
			</button>
			<button
				class="text-font-pale/[.9] border border-solid border-submit-border bg-submit py-1.5 px-3 transition-all duration-200 hover:bg-submit-hover"
				type="submit"
				@click="save"
			>
				Sauvegarder
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
	import { useField, useForm } from "vee-validate";
	import { useStudent } from "@/composables/useStudent";
	import {
		FinancialAidMaritalStatusFilter,
		defaultValues
	} from "@/types/financialAid";
	import { claimSchema } from "~/schemas/claimSchema";

	defineProps({
		disabled: {
			type: Boolean,
			default: false
		}
	});

	const emit = defineEmits([
		"selectChoice",
		"UseResquetInWork",
		"onSecondPartCancel",
		"onFormSubmit"
	]);

	let DoesUseResquetInWork;

	const useResquetInWork = (values: boolean) => {
		DoesUseResquetInWork = values;
	};

	// TODO: Ask server of info

	const { studentInfoQuery } = useStudent();

	const onSelectChange = () => {
		emit("selectChoice", values);
	};

	const { values, handleSubmit, errors } = useForm({
		validationSchema: claimSchema,
		initialValues: defaultValues
	});

	const { value: maritalStatus } = useField("maritalStatus");

	const cancel = () => {
		emit("onSecondPartCancel", false);
	};

	// TODO
	const save = () => {
		emit("onFormSubmit");
	};

	const onSubmit = handleSubmit((values) => {
		//emit("aaa", true);
	});
</script>
