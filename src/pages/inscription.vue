<template>
  <main class="container page">
    <h1 class="first-heading">Aide financière aux études</h1>

    <section class="form-section">
      <h2 class="second-heading">Inscription</h2>

      <SignupForm />
    </section>
  </main>
</template>

<script setup lang="ts">
  definePage({
    name: 'inscription',
    meta: {
      title: 'Inscription',
      navOrder: 2,
    },
  })

  useHead({
    title: 'Inscription',
  })
</script>

<style scoped></style>
