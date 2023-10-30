<template>
  <button @click="toggleMode" class="border w-[25px] h-[25px] rounded-[100%]">
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
