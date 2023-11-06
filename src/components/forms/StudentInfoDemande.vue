<template>
    <div>
        <StudentInfoDemandeMenu v-if="!firstPartValidated" @firstPartValidated="onFirstPartValidated" />
        <StudentInfoDemandeForm v-if="firstPartValidated" :values="ResquetInWork"
            @onSecondPartCancel="onSecondPartCancel" />
    </div>
</template>

<script setup lang="ts">

const firstPartValidated = ref(false);

let ResquetInWork;

const onFirstPartValidated = (values: boolean) => {
    ResquetInWork = values;
    firstPartValidated.value = true;
};

const onSecondPartCancel = () => {
    firstPartValidated.value = false;
};

const emit = defineEmits(["ResquetInWork"]);

watch(ResquetInWork, () => {
    if (ResquetInWork) {
        emit("ResquetInWork", ResquetInWork);
    }
});
</script>
