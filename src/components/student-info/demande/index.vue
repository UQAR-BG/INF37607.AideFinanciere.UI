<template>
	<StudentInfoDemandeMenu
		v-if="!firstPartValidated && !formWasSubmit"
		@firstPartValidated="onFirstPartValidated"
	/>
	<StudentInfoDemandeForm
		v-if="firstPartValidated"
		:values="ResquetInWork"
		@onSecondPartCancel="onSecondPartCancel"
		@onFormSubmit="onFormSubmit"
	/>
	<span v-if="formWasSubmit">Merci d'avoir soumit votre demande.</span>
</template>

<script setup lang="ts">
	const firstPartValidated = ref(false);
	const formWasSubmit = ref(false);
	let ResquetInWork;

	const onFirstPartValidated = (values: boolean) => {
		ResquetInWork = values;
		firstPartValidated.value = true;
	};

	const onSecondPartCancel = () => {
		firstPartValidated.value = false;
	};

	const onFormSubmit = () => {
		formWasSubmit.value = true;
		firstPartValidated.value = false;
	};

	const emit = defineEmits(["ResquetInWork"]);

	watch(ResquetInWork, () => {
		if (ResquetInWork) {
			emit("ResquetInWork", ResquetInWork);
		}
	});
</script>
