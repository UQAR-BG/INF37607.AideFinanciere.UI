<template>
	<form class="filter-form" @submit.prevent="">
		<label class="select">
			<select
				class="filter"
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
		<label class="select">
			<select
				class="filter"
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
