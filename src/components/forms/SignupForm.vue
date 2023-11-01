<template>
	<div>
		<FirstPartSignupForm
			v-if="!firstPartValidated"
			@firstPartValidated="onFirstPartValidated"
		/>
		<SecondPartSignupForm v-if="firstPartValidated" :values="studentInfo" />
	</div>
</template>

<script setup lang="ts">
	const firstPartValidated = ref(false);

	const studentInfo = ref({});

	const onFirstPartValidated = (values: {
		assuranceSociale?: string;
		birthdate?: Date;
	}) => {
		studentInfo.value = values;
		firstPartValidated.value = true;
	};
</script>
