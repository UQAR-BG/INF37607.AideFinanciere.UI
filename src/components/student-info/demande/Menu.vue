<template>
	<template v-if="isPending">
		<p>Vous avez déjà une demande d'aide financière en cours.</p>
		<p class="mt-4">
			Vous pouvez la continuer
			<LinkButton @on-click="continuer">ici</LinkButton> ou faire une
			<LinkButton @on-click="nouvelle">nouvelle demande</LinkButton>.
		</p>
	</template>
	<template v-else>
		<p>Vous n'avez pas de demande d'aide financière en cours.</p>
		<p class="mt-4">
			Vous pouvez commencer une demande
			<LinkButton @on-click="nouvelle">nouvelle demande</LinkButton>.
		</p>
	</template>
</template>

<script setup lang="ts">
	const { pendingFinancialAidClaim } = useFinancialAssistance();

	const emit = defineEmits(["firstPartValidated"]);

	const isPending = computed(() => pendingFinancialAidClaim.value);

	const continuer = () => {
		emit("firstPartValidated", true);
	};

	const nouvelle = () => {
		emit("firstPartValidated", false);
	};
</script>
