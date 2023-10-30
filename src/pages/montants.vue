<template>
	<section class="main-section">
		<h1 class="first-heading" v-once>Montants versés</h1>

		<FinancialAidFilter @filtersChanged="filtersChanged" />
		<TransitionGroup class="card-list" name="card-list" tag="div">
			<FinancialAidDetails
				v-for="montant in filteredFinancialAids"
				:montant="montant"
				:key="montant.id"
			/>
		</TransitionGroup>
		<FadeTransition>
			<p v-if="isEmpty">Aucun montant trouvé...</p>
		</FadeTransition>
	</section>
</template>

<route lang="yaml">
meta:
 layout: studentProfile
</route>

<script setup lang="ts">
	import { type FinancialAidFilters } from "@/types/filters";
	import type { FinancialAid } from "@/types/financialAid";
	import { useHead } from "unhead";

	definePage({
		name: "montants",
		meta: {
			title: "Montants versés",
			navOrder: 5
		}
	});

	useHead({
		title: "Montants versés"
	});

	const { filterFinancialAids, filterValues } =
		useFinancialAssistance("TEST012345");

	const filteredFinancialAids = computed<FinancialAid[]>(() =>
		filterFinancialAids(filterValues)
	);

	const isEmpty = computed<boolean>(
		() => filteredFinancialAids.value?.length === 0
	);

	const filtersChanged = (values: FinancialAidFilters) => {
		filterValues.year = values.year;
		filterValues.type = values.type;
	};
</script>
