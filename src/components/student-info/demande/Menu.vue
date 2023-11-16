<template>
	<template v-if="hasDemande">
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
	// TODO: add querry to check if a fiancial resquet existe to update state of hasDemande

	let hasDemande = false;

	const emit = defineEmits(["firstPartValidated"]);

	const continuer = () => {
		emit("firstPartValidated", true);
	};

	const nouvelle = () => {
		emit("firstPartValidated", false);
	};
</script>
