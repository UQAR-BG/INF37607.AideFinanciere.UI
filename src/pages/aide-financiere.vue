<template>
	<section class="main-section">
		<h2 class="second-heading">Calcul de l'aide financière</h2>

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
</template>

<route lang="yaml">
meta:
 layout: studentProfile
</route>

<script setup lang="ts">
	import { useCurrency } from "@/composables/useCurrency";
	import { useFinancialAssistance } from "@/composables/useFinancialAssistance";
	import { useHead } from "unhead";

	definePage({
		name: "aide-financiere",
		meta: {
			title: "Calcul de l'aide financière",
			navOrder: 4
		}
	});

	useHead({
		title: "Calcul de l'aide financière"
	});

	const { loanSum, grantSum } = useFinancialAssistance("TEST012345");

	const currency = useCurrency();

	const loanSumFormatted = computed(() => `${currency.format(loanSum.value)}`);
	const grantSumFormatted = computed(() => `${currency.format(grantSum.value)}`);
</script>
