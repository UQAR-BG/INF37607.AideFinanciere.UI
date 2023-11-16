<template>
	<div class="flex flex-col mb-6">
		<InputLabel :label="label" :id="id" />
		<input
			class="border border-solid border-input-border rounded font-inherit w-full h-11 py-1.5 px-3 mt-2 mx-0 mb-0 leading-normal transition-all duration-200 focus:shadow-md focus:shadow-font-dark/[.5] focus:outline-1 focus:outline focus:outline-font-dark/[.5] disabled:bg-input-disabled disabled:font-inherit disabled:text-font-dark/[.75]"
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
