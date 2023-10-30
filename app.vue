<script setup lang="ts">
import TheNavbar from "./components/layout/TheNavbar.vue";

useHead({
  title: "CommuniTraders",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "description",
      content:
        "Tradeview's raw ECN pricing has ZERO markups, offering a very low commission cost of $2.50 per standard lot, per side.",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <the-navbar />
    <NuxtPage />
  </NuxtLayout>
</template>
