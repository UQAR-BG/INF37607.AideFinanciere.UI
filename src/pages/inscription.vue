<script setup lang="ts">
  import { useHead } from 'unhead'

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

<template>
  <main class="container page">
    <span>Page d'inscription</span>
  </main>
</template>

<style scoped></style>
