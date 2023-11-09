<template>
	<div class="input-group">
		<InputLabel :label="label" :id="id" />
		<input
			class="input"
			:id="id"
			:type="type"
			:placeholder="placeholder"
			v-model.trim="value"
			:disabled="disabled"
		/>
		<ErrorLabel :errorMessage="errorMessage" v-if="!disabled" />
	</div>
</template>

<script setup lang="ts">
	import { useField } from "vee-validate";

	const props = defineProps({
		type: String,
		label: String,
		id: String,
		placeholder: String,
		errorMessage: String,
		disabled: {
			type: Boolean,
			default: false
		}
	});

	const id = computed(() => props.id);
	const disabled = computed(() => props.disabled);

	const { value } = useField(id.value);
</script>
