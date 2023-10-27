<script setup lang="ts">
  import { useHead } from 'unhead'

  definePage({
    name: 'montants',
    meta: {
      title: 'Montants',
      navOrder: 5,
    },
  })

  useHead({
    title: 'Montants',
  })
</script>

<template>
  <main class="container page">
    <span>Page des montants</span>
  </main>
</template>

<route lang="yaml">
  meta:
    layout: main
</route>

<style scoped></style>
