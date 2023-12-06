<template>
	<div>
		<SignupFirstPartForm
			v-if="!firstPartValidated"
			@firstPartValidated="onFirstPartValidated"
		/>
		<SignupSecondPartForm
			v-if="firstPartValidated"
			:values="studentInfo"
			firstPartDisabled
		/>
	</div>
</template>

<script setup lang="ts">
	import type { SignUpInput } from "~/types/auth/signup";

	const firstPartValidated = ref(false);

	const studentInfo = ref<SignUpInput>();

	const onFirstPartValidated = (values: SignUpInput) => {
		studentInfo.value = values;
		firstPartValidated.value = true;
	};
</script>
