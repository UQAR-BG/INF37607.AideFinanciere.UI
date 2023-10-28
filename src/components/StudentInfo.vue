<template>
	<StudentInfoForm :disabled="readonly" @toggleMode="toggleMode" />
</template>

<script setup lang="ts">
	const readonly = ref(true);

	const toggleMode = () => {
		readonly.value = !readonly.value;
	};
</script>
