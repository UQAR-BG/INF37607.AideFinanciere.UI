<template>
	<main class="container page">
		<h1 class="first-heading">Dossier de l'étudiant</h1>

		<section class="main-section">
			<h2 class="second-heading">Calcul de l'aide financière</h2>

			<DataGroup
				label="Total des prêts versés"
				id="loanSum"
				:data="loanSumFormatted"
			/>
			<DataGroup
				label="Total des bourses versées"
				id="grantSum"
				:data="grantSumFormatted"
			/>
		</section>
	</main>
</template>

<route lang="yaml">
meta:
 layout: main
</route>

<script setup lang="ts">
	/* CAD https://www.freecodecamp.org/news/how-to-format-number-as-currency-in-javascript-one-line-of-code/ */

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

	const canadianDollar = new Intl.NumberFormat("fr-CA", {
		style: "currency",
		currency: "CAD"
	});

	const loanSumFormatted = computed(
		() => `${canadianDollar.format(loanSum.value)}`
	);

	const grantSumFormatted = computed(
		() => `${canadianDollar.format(grantSum.value)}`
	);
</script>
