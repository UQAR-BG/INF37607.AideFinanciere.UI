<template>
	<main class="container page">
		<h1 class="first-heading">Dossier de l'étudiant</h1>

		<section class="main-section">
			<h2 class="second-heading">Montants versés</h2>

			<FinancialAidFilter @filtersChanged="filtersChanged" />
			<div class="montant-card" v-for="montant in filteredFinancialAids">
				{{ montant.amount }}
			</div>
		</section>
	</main>
</template>

<route lang="yaml">
meta:
 layout: main
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

	const filtersChanged = (values: FinancialAidFilters) => {
		filterValues.year = values.year;
		filterValues.type = values.type;
	};
</script>
