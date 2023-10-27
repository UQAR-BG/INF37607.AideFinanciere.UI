<template>
  <main class="container page">
    <h1 class="first-heading">Aide financière aux études</h1>

    <section class="form-section">
      <h2 class="second-heading">Identification</h2>

      <form class="form" @submit.prevent="onSubmit">
        <div class="input-group">
          <label class="input-label" for="codePermanent">Code Permanent</label>
          <input class="input" id="codePermanent" type="text" placeholder="AAAA11223344" v-model.trim="codePermanent" />
          <span class="small-label error-label">{{
            errors.codePermanent
          }}</span>
        </div>
        <div class="input-group">
          <label class="input-label" for="password">Mot de passe</label>
          <input class="input" id="password" type="password" v-model.trim="password" />
          <span class="small-label error-label">{{
            errors.password
          }}</span>
        </div>
        <button class="submit-btn" type="submit">Soumettre</button>
        <span class="small-label form-span">Besoin d'un compte ?<router-link to="/inscription" class="small-label form-link"
            >Aller à l'inscription</router-link
          ></span>
      </form>
    </section>
    
  </main>
</template>

<script setup lang="ts">
  import { toTypedSchema } from '@vee-validate/zod';
  import { useHead } from 'unhead'
  import { useField, useForm } from 'vee-validate';
  import { getMeFn } from '@/api/authApi';
  import { loginSchema } from '@/composables/schemas/loginSchema'
  import { useLogin } from '@/composables/useLogin';

  definePage({
    name: 'home',
    meta: {
      title: 'Aide financière aux études ',
      navOrder: 1,
    },
  })

  useHead({
    title: 'Aide financière aux études ',
  })

  const authStore = useAuthStore();

  const { handleSubmit, errors, resetForm } = useForm({
    validationSchema: toTypedSchema(loginSchema)
  });

  const { value: codePermanent } = useField('codePermanent');
  const { value: password } = useField('password');

  const authResult = useQuery('authUser', () => getMeFn(), {
    enabled: false,
    retry: 1,
  });

  const { mutationContext } = useLogin();

  const onSubmit = handleSubmit((values) => {
    mutationContext.mutate({
      codePermanent: values.codePermanent,
      password: values.password,
    });
    resetForm();
  });

  onBeforeUpdate(() => {
    if (authResult.isSuccess.value) {
      const authUser = Object.assign({}, authResult.data.value?.data.user);
      authStore.setAuthUser(authUser);
    }
  });
</script>

<style scoped></style>
