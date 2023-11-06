<template>
    <div v-if="hasDemande">

        <span>Vous avez déjà une demande d'aide financière en cours. Vous pouvez la
            continuer <button class="link-btn" type="submit" @click="continuer">ici</button>
            ou faire une <button class="link-btn" type="submit" @click="nouvelle">nouvelle demande</button>.
        </span>

    </div>
    <div v-else>
        <span>Vous n'avez pas de demande d'aide financière en cours. Vous pouvez commencer une demande
            <button class="link-btn" type="submit" @click="nouvelle"> nouvelle demande</button>.
        </span>
    </div>
</template>


<script setup lang="ts">

// TODO: add querry to check if a fiancial resquet existe to update state of hasDemande

let hasDemande = false

const emit = defineEmits(["firstPartValidated"]);

const continuer = (() => {
    emit("firstPartValidated", true);
});

const nouvelle = (() => {
    emit("firstPartValidated", false);
});

</script>

<style>
.link-btn {
    color: blue;
    text-decoration: underline;
}
</style>