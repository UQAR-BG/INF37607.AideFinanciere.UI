<template>
	<div
		class="mb-8 py-8 px-12 bg-main rounded-md border border-solid border-font-dark/[.3] shadow-md shadow-font-dark/[.5]"
	>
		<div class="pb-2 border-b border-solid border-font-dark/[.3] font-bold">
			<span>Demande #{{ montant.id }}</span>
		</div>
		<div class="flex justify-between items-center mt-4">
			<span>Date de versement: {{ date.format(montant.paymentDate) }}</span>
			<span>Type: {{ formatType(montant.type) }}</span>
			<span>Montant versé: {{ currency.format(montant.amount) }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { type FinancialAid } from "@/types/financialAid";

	type propType = {
		montant: FinancialAid;
	};

	defineProps<propType>();

	const currency = useCurrency();
	const { formatType } = useFinancialAssistance();
	const date = useDate();
</script>
