<script setup>
import TheTopbar from "./TheTopbar.vue";
const colorMode = useColorMode();
</script>

<template>
  <nav class="fixed w-full max-w-[2300px]">
    <div class="bg-secondary p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex justify-between items-center">
          <a href="/">
            <img src="/images/logo.svg" alt="Logo" class="h-[45px] w-auto" />
          </a>
          <div
            class="hidden xl:flex space-x-8 font-bold text-sm ml-20 text-white"
          >
            <a href="#" class="uppercase tracking-[.25em]">Forex</a>
            <a href="#" class="uppercase tracking-[.25em]">Stocks</a>
            <a href="#" class="uppercase tracking-[.25em]">Futures</a>
            <a href="#" class="tracking-[.15em]">TradeGATEHub</a>
          </div>
        </div>
        <div class="hidden lg:flex text-xs font-light">
          <form class="px-4">
            <select class="bg-secondary text-white font-medium px-2">
              <option value="en">Log in</option>
            </select>
          </form>
          <a href="#" class="text-white px-4 border-l">Contact Us</a>
          <form class="pl-5">
            <i class="fas fa-globe text-white my-auto"></i>
            <select v-model="locale" class="bg-secondary text-white">
              <option value="en">English</option>
              <option value="es">Espanish</option>
            </select>
          </form>
        </div>
        <!-- <select
        v-model="colorMode.preference"
        class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select> -->
      </div>
    </div>
    <the-topbar />
  </nav>
</template>

<script>
export default {
  components: { TheTopbar },
  name: "TheNavbar",
};
</script>
