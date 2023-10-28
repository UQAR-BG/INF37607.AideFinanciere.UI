<template>
    <form class="form" @submit.prevent="onSubmit">
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
    <button class="submit-btn" type="submit">Soumettre</button>
    <span class="small-label form-span">Besoin d'un compte ?<router-link to="/inscription" class="small-label form-link"
        >Aller à l'inscription</router-link
        ></span>
    </form>
</template>

<script setup lang="ts">
  import { toTypedSchema } from '@vee-validate/zod';
  import { useForm } from 'vee-validate';
  import { loginSchema } from '@/schemas/loginSchema'
  import { useLogin } from '@/composables/useLogin';
  import { useAuth } from '@/composables/useAuth';

  const authStore = useAuthStore();

  const { handleSubmit, errors, resetForm } = useForm({
    validationSchema: toTypedSchema(loginSchema)
  });

  const { loginMutation } = useLogin();
  const { authUserQuery } = useAuth();

  const onSubmit = handleSubmit((values) => {
    loginMutation.mutate({
      codePermanent: values.codePermanent,
      password: values.password,
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