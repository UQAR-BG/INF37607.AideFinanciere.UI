<template>
    <div class="input-group">
        <label class="input-label" :for="id">{{ label }}</label>
        <input class="input" :id="id" :type="type" :placeholder="placeholder" v-model.trim="value" />
        <span class="small-label error-label">{{ errorMessage }}</span>
    </div>
</template>

<script setup lang="ts">
    import { useField } from 'vee-validate';

    const props = defineProps({
        type: String,
        label: String,
        id: String,
        placeholder: String,
        errorMessage: String
    });

    const id = computed(() => props.id);

    const { value } = useField(id.value);

</script>