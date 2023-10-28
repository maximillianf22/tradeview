<script setup lang="ts">
const { locale } = useI18n();

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

const colorMode = useColorMode();
</script>

<template>
  <NuxtLayout>
    <p class="p-4 pb-2">
      <select
        v-model="colorMode.preference"
        class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </p>
    <div>
      <form>
        <select v-model="locale">
          <option value="en">en</option>
          <option value="es">fr</option>
        </select>
      </form>
    </div>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">
body {
  @apply min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200;
}
</style>
