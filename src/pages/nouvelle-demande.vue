<script setup lang="ts">
  import { useHead } from 'unhead'

  definePage({
    name: 'nouvelle-demande',
    meta: {
      title: 'NouvelleDemande',
      navOrder: 1,
    },
  })

  useHead({
    title: 'NouvelleDemande',
  })
</script>

<template>
  <main class="container page">
    <span>Nouvelle demande de bourse ou de prêt</span>
  </main>
</template>

<route lang="yaml">
  meta:
    layout: main
</route>

<style scoped></style>
