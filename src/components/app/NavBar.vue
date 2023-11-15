<template>
	<nav class="w-full bg-navbar">
		<div class="m-auto max-w-5xl">
			<div class="flex content-start items-center px-4">
				<NavbarLink
					id="link-to-dossier"
					to="/dossier"
					:active="isActive(PageName.Dossier)"
					>Dossier</NavbarLink
				>
				<NavbarLink
					id="link-to-aide-financiere"
					to="/aide-financiere"
					:active="isActive(PageName.AideFinanciere)"
					>Aide financière</NavbarLink
				>
				<NavbarLink
					id="link-to-montants"
					to="/montants"
					:active="isActive(PageName.Montants)"
					>Montants</NavbarLink
				>
				<NavbarLink
					id="link-to-nouvelle-demande"
					to="/nouvelle-demande"
					:active="isActive(PageName.NouvelleDemande)"
					>Nouvelle demande</NavbarLink
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
