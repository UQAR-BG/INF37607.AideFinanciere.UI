<template>
	<form class="form w-full" @submit.prevent="onSubmit">
		<!-- Identité de l’étudiant -->
		<div class="pb-2 border-b border-solid border-font-dark/[.3] font-bold">
			<span>Identité</span>
		</div>
		<div class="flex justify-between items-center mt-4">
			<section>
				<Block
					class="w-full flex content-start items-center gap-x-12 [&>*]:basis-2/4"
				>
					<DataGroup label="Prénom" id="firstName" :data="studentInfo?.firstName" />
					<DataGroup label="Nom" id="lastName" :data="studentInfo?.lastName" />
				</Block>
				<DataGroup
					label="Numéro d'assurance sociale"
					id="socialInsuranceNumber"
					:data="studentInfo?.socialInsuranceNumber"
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
				id="correspondenceAddress"
				:errorMessage="errors.correspondenceAddress"
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
				type="date"
				label="Date d’obtention du statut de résident permanent ou de réfugié"
				id="dateStatus"
				:errorMessage="errors.dateStatus"
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
				id="institutionName"
				:errorMessage="errors.institutionName"
				:disabled="disabled"
			/>
			<InputGroup
				type="text"
				label="Code de l'établissement"
				id="institutionCode"
				:errorMessage="errors.institutionCode"
				:disabled="disabled"
			/>
		</Block>
		<Block
			class="w-full flex content-start items-center gap-x-12 [&>*]:basis-2/4"
		>
			<InputGroup
				type="text"
				label="Code du programme "
				id="programmeCode"
				:errorMessage="errors.programmeCode"
				:disabled="disabled"
			/>
			<InputGroup
				type="text"
				label="Nombre de crédits"
				id="creditsNumbers"
				:errorMessage="errors.creditsNumbers"
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
				id="statusStartingDate"
				:errorMessage="errors.statusStartingDate"
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
				id="totalGrossIncome"
				:errorMessage="errors.totalGrossIncome"
			/>
		</Block>

		<div class="btn-group">
			<button
				class="text-font-dark/[.9] border border-solid border-cancel-border bg-cancel py-1.5 px-3 mr-4 transition-all duration-200 hover:bg-cancel-hover"
				type="button"
				@click="cancel"
			>
				Annuler
			</button>
			<button
				class="text-font-pale/[.9] border border-solid border-submit-border bg-submit py-1.5 px-3 transition-all duration-200 hover:bg-submit-hover"
				type="button"
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
		type FinancialAidClaim
	} from "@/types/financialAid";

	const props = defineProps({
		disabled: {
			type: Boolean,
			default: false
		},
		new: {
			type: Boolean,
			default: true
		}
	});

	// const emit = defineEmits([
	// 	"selectChoice",
	// 	"UseResquetInWork",
	// 	"onSecondPartCancel",
	// 	"onFormSubmit"
	// ]);

	// let DoesUseResquetInWork;

	// const useResquetInWork = (values: boolean) => {
	// 	DoesUseResquetInWork = values;
	// };

	const { studentInfoQuery } = useStudent();
	const studentInfo = computed(() => studentInfoQuery.data?.value);

	const {
		pendingFinancialAidClaim,
		completeClaimMutation,
		financialAidClaimMutation,
		cancelClaimMutation
	} = useFinancialAssistance();

	// const onSelectChange = () => {
	// 	emit("selectChoice", values);
	// };

	const { values, handleSubmit, errors, resetForm } = useForm({
		initialValues: props.new
			? { maritalStatus: "Célibataire " }
			: pendingFinancialAidClaim.value
	});

	const { value: maritalStatus } = useField("maritalStatus");

	const router = useRouter();

	const cancel = () => {
		cancelClaimMutation.mutate();

		router.push("/dossier");
	};

	const save = () => {
		financialAidClaimMutation.mutate(mapToClaim(values));
	};

	const onSubmit = handleSubmit((values) => {
		completeClaimMutation.mutate(mapToClaim(values));
		resetForm();
	});

	const mapToClaim = (values: FinancialAidClaim) => {
		return {
			citizenship: values.citizenship ?? "",
			correspondenceAddress: values.correspondenceAddress ?? "",
			creditsNumbers: values.creditsNumbers ?? 0,
			dateStatus: values.dateStatus,
			email: values.email ?? "",
			immigrationCode: values.immigrationCode ?? "",
			institutionCode: values.institutionCode ?? "",
			institutionName: values.institutionName ?? "",
			language: values.language ?? "",
			phoneNumber: values.phoneNumber ?? "",
			programmeCode: values.programmeCode ?? "",
			secondPhoneNumber: values.secondPhoneNumber ?? "",
			statusStartingDate: values.statusStartingDate,
			totalGrossIncome: values.totalGrossIncome ?? 0
		};
	};
</script>
