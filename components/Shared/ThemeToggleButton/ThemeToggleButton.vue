<template>
  <button
    @click="toggleMode"
    class="border w-[25px] h-[25px] rounded-[100%]"
    id="color-mode-toggle-button"
    aria-label="{{ colorMode.preference !== 'light' ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}"
  >
    <i :class="iconClass"></i>
  </button>
</template>

<script setup>
const colorMode = useColorMode();

const toggleMode = () => {
  colorMode.preference = colorMode.preference !== "light" ? "light" : "dark";
};

const iconClass = computed(() => {
  return colorMode.preference !== "light"
    ? "fa fa-sun text-yellow-400"
    : "fa fa-moon text-white";
});
</script>
