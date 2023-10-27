<script setup lang="ts">
  import { useHead } from 'unhead'

  definePage({
    name: 'aide-financiere',
    meta: {
      title: 'AideFinanciere',
      navOrder: 4,
    },
  })

  useHead({
    title: 'AideFinanciere',
  })
</script>

<template>
  <main class="container page">
    <span>Page pour l'aide financière</span>
  </main>
</template>

<route lang="yaml">
  meta:
    layout: main
</route>

<style scoped></style>
