<template>
	<footer
		class="flex flex-col items-center mt-auto pt-5 px-0 pb-12 animate-fade-in-2"
	>
		<ul class="flex justify-between items-center gap-x-1 list-none">
			<FooterLink
				href="https://www.quebec.ca/gouvernement/ministere/education/acces-information"
				>Accès à l'information</FooterLink
			>
			<VerticalLine />
			<FooterLink href="https://www.education.gouv.qc.ca/accessibilite"
				>Accessibilité</FooterLink
			>
			<VerticalLine />
			<FooterLink
				href="https://www.quebec.ca/gouvernement/ministere/education/presence-du-ministere-sur-les-medias-sociaux/netiquette"
				>Nétiquette</FooterLink
			>
			<VerticalLine />
			<FooterLink href="https://www.education.gouv.qc.ca/plan-du-site"
				>Plan du site</FooterLink
			>
			<VerticalLine />
			<FooterLink
				href="https://www.education.gouv.qc.ca/politique-de-confidentialite"
				>Politique de confidentialité</FooterLink
			>
		</ul>
		<img src="/images/quebecDrapeau_couleur.svg" alt="Logo" class="max-w-logo" />
		<a
			href="https://www.quebec.ca/droit-auteur"
			class="text-font-link no-underline font-normal hover:cursor-pointer hover:underline text-xs"
			>&copy; Gouvernement du Québec, 2023</a
		>
	</footer>
</template>

<script>
	export default {};
</script>
