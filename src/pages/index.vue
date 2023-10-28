<template>
  <main class="container page">
    <h1 class="first-heading">Aide financière aux études</h1>

    <section class="form-section">
      <h2 class="second-heading">Identification</h2>

      <LoginForm />
    </section>
    
  </main>
</template>

<script setup lang="ts">
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
</script>
