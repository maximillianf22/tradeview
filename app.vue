<script setup lang="ts">
const { locale } = useI18n();
import TheFooter from "./components/layout/TheFooter.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";

useHead({
  title: "Nuxt3 Starter",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: "Home page" },
    { name: "keywords", content: "Home" },
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
  <link
    href="https://use.fontawesome.com/releases/v5.0.6/css/all.css"
    rel="stylesheet"
  />
  <NuxtLayout>
    <the-navbar />
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
body {
  @apply min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200;
}
</style>
