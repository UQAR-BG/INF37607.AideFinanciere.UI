<template>
	<NuxtLayout name="student-profile">
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
			<TransitionFade>
				<p v-if="isEmpty">Aucun montant trouvé...</p>
			</TransitionFade>
		</section>
	</NuxtLayout>
</template>

<script setup lang="ts">
	import { type FinancialAidFilters } from "@/types/filters";
	import type { FinancialAid } from "@/types/financialAid";
	import { useHead } from "unhead";

	definePageMeta({
		name: "montants",
		layout: false,
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
