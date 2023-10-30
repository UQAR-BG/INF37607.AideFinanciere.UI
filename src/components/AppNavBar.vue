<template>
	<nav class="navbar">
		<div class="container">
			<div class="navlinks">
				<RouterLink
					id="link-to-dossier"
					class="navlink"
					:class="{ active: isActive(PageName.Dossier) }"
					to="/dossier"
					>Dossier</RouterLink
				>
				<RouterLink
					id="link-to-aide-financiere"
					class="navlink"
					:class="{ active: isActive(PageName.AideFinanciere) }"
					to="/aide-financiere"
					>Aide financière</RouterLink
				>
				<RouterLink
					id="link-to-montants"
					class="navlink"
					:class="{ active: isActive(PageName.Montants) }"
					to="/montants"
					>Montants</RouterLink
				>
				<RouterLink
					id="link-to-nouvelle-demande"
					class="navlink"
					:class="{ active: isActive(PageName.NouvelleDemande) }"
					to="/nouvelle-demande"
					>Nouvelle demande</RouterLink
				>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
	import { PageName } from "@/types/pages";

	const route = useRoute();
	const activePage = computed(() => route.name);

	const isActive = (linkName: PageName): boolean => {
		return linkName === activePage.value;
	};
</script>
