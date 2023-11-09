<template>
	<section class="block" :class="class">
		<slot />
	</section>
</template>

<script setup lang="ts">
	defineProps({
		class: {
			type: String,
			default: ""
		}
	});
</script>
