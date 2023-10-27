<template>
  <main class="container page">
    <h1 class="first-heading">Aide financière aux études</h1>

    <section class="form-section">
      <h2 class="second-heading">Identification</h2>

      <form class="form" @submit.prevent="submitForm">
        <div class="input-group">
          <label class="input-label" for="code-permanent">Code Permanent</label>
          <input class="input" id="code-permanent" type="text" placeholder="AAAA11223344" />
        </div>
        <div class="input-group">
          <label class="input-label" for="password">Mot de passe</label>
          <input class="input" id="password" type="password" />
        </div>
        <button class="submit-btn" type="submit">Soumettre</button>
      </form>
    </section>
    
  </main>
</template>

<script setup lang="ts">
  import { useHead } from 'unhead'

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

  const submitForm = () => {
    console.log('Submitted Sign In Form');
  };
</script>

<style scoped></style>
