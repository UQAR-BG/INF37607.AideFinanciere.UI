<template>
	<form class="filter-form" @submit.prevent="">
		<select
			class="filter"
			name="year"
			id="year"
			@change="onSelectChange"
			v-model="year"
		>
			<option v-for="year in yearFilterValues" :value="year">
				{{ year }}
			</option>
		</select>
		<select
			class="filter"
			name="type"
			id="type"
			@change="onSelectChange"
			v-model="type"
		>
			<option v-for="(type, index) in typeFilterValues" :value="index">
				{{ type }}
			</option>
		</select>
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

	const yearFilterValues = FinancialAidClaimYearFilter;
	const typeFilterValues = FinancialAidTypeFilter;

	const { values } = useForm<FinancialAidFilters>({
		initialValues: defaultValues
	});

	const { value: year } = useField("year");
	const { value: type } = useField("type");

	const onSelectChange = () => {
		emit("filtersChanged", values);
	};
</script>
