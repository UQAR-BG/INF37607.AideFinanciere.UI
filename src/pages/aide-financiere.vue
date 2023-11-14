<template>
	<NuxtLayout name="student-profile">
		<section class="main-section">
			<AppHeading v-once>Calcul de l'aide financière</AppHeading>

			<DataGroup
				label="Total des prêts versés"
				id="loanSum"
				:data="currency.format(loanSum)"
			/>
			<DataGroup
				label="Total des bourses versées"
				id="grantSum"
				:data="grantSumFormatted"
			/>
		</section>
	</NuxtLayout>
</template>

<script setup lang="ts">
	import { useCurrency } from "@/composables/useCurrency";
	import { useFinancialAssistance } from "@/composables/useFinancialAssistance";
	import { PageName } from "@/types/pages";
	import { useHead } from "unhead";

	definePageMeta({
		name: "aide-financiere",
		layout: false,
		meta: {
			title: "Calcul de l'aide financière",
			navOrder: 4
		}
	});

	useHead({
		title: "Calcul de l'aide financière"
	});

	provide("activePage", PageName.AideFinanciere);

	const { loanSum, grantSum } = useFinancialAssistance("TEST012345");

	const currency = useCurrency();

	const loanSumFormatted = computed(() => `${currency.format(loanSum.value)}`);
	const grantSumFormatted = computed(() => `${currency.format(grantSum.value)}`);
</script>
