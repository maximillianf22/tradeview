<template>
  <nav class="fixed w-full max-w-[2300px]">
    <div class="bg-secondary p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex justify-between items-center">
          <a href="/">
            <img
              src="/images/logo.svg"
              alt="Logo"
              class="h-[30px] lg:h-[45px] w-auto"
            />
          </a>
          <div
            class="hidden xl:flex space-x-8 font-bold text-sm ml-20 text-white"
          >
            <a href="#" class="uppercase tracking-[.25em]">
              {{ $t("navbar.forex") }}
            </a>
            <a href="#" class="uppercase tracking-[.25em]">
              {{ $t("navbar.stocks") }}
            </a>
            <a href="#" class="uppercase tracking-[.25em]">
              {{ $t("navbar.futures") }}
            </a>
            <a href="#" class="tracking-[.15em]">TradeGATEHub</a>
          </div>
        </div>
        <div class="hidden lg:flex text-xs font-ligh items-center">
          <form class="px-4">
            <a class="bg-secondary text-white font-medium px-2">
              {{ $t("navbar.login") }}
              <i class="fas fa-caret-down text-white my-auto mx-1"></i>
            </a>
          </form>
          <a href="#" class="text-white px-4 border-l">
            {{ $t("navbar.contact-us") }}
          </a>
          <form class="pl-5">
            <language-toggle-button />
          </form>
          <div class="pl-4">
            <theme-toggle-button />
          </div>
        </div>
      </div>
    </div>
    <the-topbar />
  </nav>
</template>

<script>
import ThemeToggleButton from "../Shared/ThemeToggleButton/ThemeToggleButton.vue";
import LanguageToggleButton from "../Shared/LanguageToggleButton/LanguageToggleButton.vue";
import TheTopbar from "./TheTopbar.vue";

export default {
  components: { TheTopbar, ThemeToggleButton, LanguageToggleButton },
  name: "TheNavbar",
};
</script>
