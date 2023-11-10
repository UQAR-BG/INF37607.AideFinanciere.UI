<template>
    <form class="form full" @submit.prevent="onSubmit" @ResquetInWork="useResquetInWork">
        <!-- Identité de l’étudiant -->
        <div class="card-header">
            <span class="card-label">Identité</span>
        </div>
        <div class="card-body">
            <section>
                <Block class="full inline">
                    <DataGroup label="Prénom" id="firstname" :data="studentInfo?.firstname" />
                    <DataGroup label="Nom" id="lastname" :data="studentInfo?.lastname" />
                </Block>
                <DataGroup label="Numéro d'assurance sociale" id="nas" :data="studentInfo?.nas" />
            </section>
        </div>

        <Block class="full inline">
            <InputGroup type="text" label="Numéro de téléphone" id="phoneNumber" :errorMessage="errors.phoneNumber"
                :disabled="disabled" />
            <InputGroup type="text" label="Autre numéro de téléphone" id="otherphoneNumber"
                :errorMessage="errors.otherphoneNumber" :disabled="disabled" />
        </Block>
        <Block class="full inline">
            <InputGroup type="text" label="Adresse de courriel" id="email" :errorMessage="errors.email"
                :disabled="disabled" />

            <InputGroup type="text" label="Adresse de correspondance" id="address" :errorMessage="errors.address"
                :disabled="disabled" />
        </Block>
        <Block class="full inline">
            <InputGroup type="text" label="Citoyenneté" id="citizenship" :errorMessage="errors.citizenship"
                :disabled="disabled" />
            <InputGroup type="text" label="Code d’immigration" id="immigrationNumber"
                :errorMessage="errors.immigrationNumber" :disabled="disabled" />
        </Block>
        <Block class="full inline">
            <InputGroup type="text" label="Date d’obtention du statut de résident permanent ou de réfugié" id="statutDate"
                :errorMessage="errors.statutDate" :disabled="disabled" />
            <InputGroup type="text" label="Langue de correspondancen" id="language" :errorMessage="errors.language"
                :disabled="disabled" />
        </Block>

        <!-- Renseignement scolaire -->
        <div class="card-header">
            <span class="card-label">Renseignement scolaire</span>
        </div>
        <div class="card-body"></div>

        <Block class="full inline">
            <InputGroup type="text" label="Nom de l'établissement" id="establishmentName"
                :errorMessage="errors.establishmentName" :disabled="disabled" />
            <InputGroup type="text" label="Code de l'établissement" id="establishmentCode"
                :errorMessage="errors.establishmentCode" :disabled="disabled" />
        </Block>
        <Block class="full inline">
            <InputGroup type="text" label="Code du programme " id="programeCode" :errorMessage="errors.programeCode"
                :disabled="disabled" />
            <InputGroup type="text" label="Nombre de crédits" id="credit" :errorMessage="errors.credit"
                :disabled="disabled" />
        </Block>

        <!-- Situation de l’étudiant -->
        <div class="card-header">
            <span class="card-label">Situation de l’étudiant</span>
        </div>
        <div class="card-body"></div>

        <Block class="full inline">
            <label class="select">
                <select class="filter" name="status" id="status" @change="onSelectChange" v-model="status">
                    <option v-for="status in FinancialAidMaritalStatusFilter" :value="status">
                        {{ status }}
                    </option>
                </select>
            </label>
            <InputGroup type="date" label="Date de début de l'état matrimonial " id="maritalStatusDate"
                :errorMessage="errors.maritalStatusDate" />
        </Block>

        <!-- Ressources financières -->
        <div class="card-header">
            <span class="card-label">Ressources financières</span>
        </div>
        <div class="card-body"></div>
        <Block class="half">
            <InputGroup type="text" label="Revenu total brute" id="grossTotalIncome"
                :errorMessage="errors.grossTotalIncome" />
        </Block>


        <div class="btn-group">
            <button class="cancel-btn" type="submit" @click="cancel">Annuler</button>
            <button class="submit-btn" type="submit" @click="save">Sauvegarder</button>
            <button class="submit-btn" type="submit">Soumettre</button>
        </div>
    </form>
</template>

<script setup lang="ts">

import { toTypedSchema } from "@vee-validate/zod";
import { useField, useForm } from "vee-validate";
import { studentInfoSchema } from "@/schemas/studentInfoSchema";
import { useStudent } from "@/composables/useStudent";
import {
    FinancialAidMaritalStatusFilter,
    type FinancialAidMaritalStatus,
    defaultValues
} from "@/types/financialAid";


defineProps({
    disabled: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["selectChoice", "UseResquetInWork", "onSecondPartCancel", "onFormSubmit"]);

let DoesUseResquetInWork;

const useResquetInWork = (values: boolean) => {
    DoesUseResquetInWork = values;
};


// TODO: Ask server of info


const { values } = useForm<FinancialAidMaritalStatus>({
    initialValues: defaultValues
});

const { value: status } = useField("status");

const onSelectChange = () => {
    emit("selectChoice", values);
};

const { handleSubmit, errors } = useForm({
    validationSchema: toTypedSchema(studentInfoSchema)
});


const cancel = (() => {
    emit("onSecondPartCancel", false);
});


// TODO
const save = (() => {
    emit("onFormSubmit");
});

const onSubmit = handleSubmit((values) => {
    //emit("aaa", true);
});
</script>

