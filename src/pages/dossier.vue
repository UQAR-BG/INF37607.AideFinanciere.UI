<script setup lang="ts">
  import { useHead } from 'unhead'

  definePage({
    name: 'dossier',
    meta: {
      title: 'Dossier',
      navOrder: 3,
    },
  })

  useHead({
    title: 'Dossier',
  })
</script>

<template>
  <main class="container page">
    <span>Page du Dossier</span>
  </main>
</template>

<style scoped></style>
