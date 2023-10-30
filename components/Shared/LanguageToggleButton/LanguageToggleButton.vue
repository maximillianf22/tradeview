<template>
  <button
    @click="toggleLocale"
    class="text-white flex"
    id="language-toggle-button"
    aria-label="{{ locale === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés' }}"
  >
    {{ locale === "en" ? "English" : "Español" }}
    <i class="fas fa-globe text-white my-auto mx-1"></i>
    <i class="fas fa-caret-down text-white my-auto mx-1"></i>
  </button>
</template>

<script setup>
const { locale } = useI18n();
const toggleLocale = (event) => {
  event.preventDefault();
  locale.value = locale.value === "en" ? "es" : "en";
};
</script>
