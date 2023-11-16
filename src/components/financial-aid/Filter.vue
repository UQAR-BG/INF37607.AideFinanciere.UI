<template>
	<form class="flex justify-end items-center gap-x-4" @submit.prevent="">
		<label
			class="select after:content-['\25BC'] after:absolute after:top-4 after:right-4 after:pointer-events-none after:transition-all after:duration-300 after:ease-in hover:after:animate-after-bounce hover:after:text-brand"
		>
			<select
				class="basis-4 p-4 cursor-pointer bg-transparent border-none"
				name="year"
				id="year"
				@change="onSelectChange"
				v-model="year"
			>
				<option v-for="year in FinancialAidClaimYearFilter" :value="year">
					{{ year }}
				</option>
			</select></label
		>
		<label
			class="select after:content-['\25BC'] after:absolute after:top-4 after:right-4 after:pointer-events-none after:transition-all after:duration-300 after:ease-in hover:after:animate-after-bounce hover:after:text-brand"
		>
			<select
				class="basis-4 p-4 cursor-pointer bg-transparent border-none"
				name="type"
				id="type"
				@change="onSelectChange"
				v-model="type"
			>
				<option v-for="(type, index) in FinancialAidTypeFilter" :value="index">
					{{ type }}
				</option>
			</select>
		</label>
	</form>
</template>

<script setup lang="ts">
	import {
		FinancialAidClaimYearFilter,
		FinancialAidTypeFilter,
		type FinancialAidFilters,
		defaultValues
	} from "@/types/filters";
	import { useField, useForm } from "vee-validate";

	const emit = defineEmits(["filtersChanged"]);

	const { values } = useForm<FinancialAidFilters>({
		initialValues: defaultValues
	});

	const { value: year } = useField("year");
	const { value: type } = useField("type");

	const onSelectChange = () => {
		emit("filtersChanged", values);
	};
</script>
