<template>
	<button
		class="w-fit p-0 border-none bg-none text-font-link underline transition-all duration-200 hover:cursor-pointer hover:text-font"
		type="submit"
		@click="onButtonClick"
	>
		<slot />
	</button>
</template>

<script setup lang="ts">
	const emit = defineEmits(["onClick"]);

	const onButtonClick = () => {
		emit("onClick");
	};
</script>
