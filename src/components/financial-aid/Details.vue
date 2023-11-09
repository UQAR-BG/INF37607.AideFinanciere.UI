<template>
	<div class="card">
		<div class="card-header">
			<span class="card-label">Demande #{{ montant.claimId }}</span>
		</div>
		<div class="card-body">
			<span class="card-label"
				>Date de versement: {{ date.format(montant.date) }}</span
			>
			<span class="card-label">Type: {{ formatType(montant.type) }}</span>
			<span class="card-label"
				>Montant versé: {{ currency.format(montant.amount) }}</span
			>
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
