<template>
	<form class="form w-2/4" @submit.prevent="onSubmit">
		<InputGroup
			type="text"
			label="Code Permanent"
			id="codePermanent"
			placeholder="AAAA11223344"
			:errorMessage="errors.codePermanent"
		/>
		<InputGroup
			type="password"
			label="Mot de passe"
			id="password"
			:errorMessage="errors.password"
		/>
		<button
			class="text-font-pale/[.9] border border-solid border-submit-border bg-submit py-1.5 px-3 transition-all duration-200 hover:bg-submit-hover"
			type="submit"
		>
			Soumettre
		</button>
		<span class="text-xs block text-end"
			>Besoin d'un compte ?<router-link
				to="/inscription"
				class="text-xs text-font-link ml-2 font-normal underline"
				>Aller à l'inscription</router-link
			></span
		>
	</form>
</template>

<script setup lang="ts">
	import { toTypedSchema } from "@vee-validate/zod";
	import { useForm } from "vee-validate";
	import { loginSchema } from "@/schemas/loginSchema";
	import { useAuthStore } from "~/stores/authStore";

	const authStore = useAuthStore();

	const { handleSubmit, errors, resetForm } = useForm({
		validationSchema: toTypedSchema(loginSchema)
	});

	const { loginMutation } = useLogin();
	const { authUserQuery } = useAuth();

	const onSubmit = handleSubmit((values) => {
		loginMutation.mutate({
			codePermanent: values.codePermanent,
			password: values.password
		});
		resetForm();
	});

	onBeforeUpdate(() => {
		if (authUserQuery.isSuccess.value) {
			const authUser = Object.assign({}, authUserQuery.data.value?.data.user);
			authStore.setAuthUser(authUser);
		}
	});
</script>
