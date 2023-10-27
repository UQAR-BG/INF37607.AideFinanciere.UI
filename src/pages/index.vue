<script setup lang="ts">
  import { useHead } from 'unhead'

  definePage({
    name: 'home',
    // alias: ['home'],
    meta: {
      title: 'Home',
      navOrder: 1,
    },
  })

  useHead({
    title: 'Home',
  })
</script>

<template>
  <main class="container page">
    <h1 class="main-title">Portail d’aide financière</h1>
  </main>
</template>

<style scoped></style>
