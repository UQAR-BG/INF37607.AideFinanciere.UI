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
	import type { SignupStudentInfo } from "@/types/student";

	const firstPartValidated = ref(false);

	const studentInfo = ref<SignupStudentInfo>({});

	const onFirstPartValidated = (values: SignupStudentInfo) => {
		studentInfo.value = values;
		firstPartValidated.value = true;
	};
</script>
