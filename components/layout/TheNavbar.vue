<template>
  <nav class="fixed w-full max-w-[2300px] z-10">
    <div class="bg-secondary p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex justify-between items-center">
          <button
            @click="openModal"
            class="bg-transparent block xl:hidden hover:bg-primary text-white border w-[50px] h-[30px] mr-2"
            id="menu-toggle-button"
            aria-label="{{ $t('navbar.open-menu') }}"
          >
            <i class="fas fa-bars"></i>
          </button>
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
            <a
              href="#"
              class="uppercase tracking-[.25em]"
              id="forex-link"
              aria-label="{{ $t('navbar.forex') }}"
            >
              {{ $t("navbar.forex") }}
            </a>
            <a
              href="#"
              class="uppercase tracking-[.25em]"
              id="stocks-link"
              aria-label="{{ $t('navbar.stocks') }}"
            >
              {{ $t("navbar.stocks") }}
            </a>
            <a
              href="#"
              class="uppercase tracking-[.25em]"
              id="futures-link"
              aria-label="{{ $t('navbar.futures') }}"
            >
              {{ $t("navbar.futures") }}
            </a>
            <a
              href="#"
              class="tracking-[.15em]"
              id="tradegatehub-link"
              aria-label="{{ $t('navbar.tradegatehub') }}"
            >
              TradeGATEHub
            </a>
          </div>
        </div>
        <div class="text-xs flex font-light items-center">
          <form class="px-4">
            <a
              class="bg-secondary text-white font-medium px-2 hidden lg:flex"
              id="login-link"
              aria-label="{{ $t('navbar.login') }}"
            >
              {{ $t("navbar.login") }}
              <i class="fas fa-caret-down text-white my-auto mx-1"></i>
            </a>
          </form>
          <a
            href="#"
            class="hidden lg:block text-white px-4 border-l"
            id="contact-us-link"
            aria-label="{{ $t('navbar.contact-us') }}"
          >
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
    <the-navbar-menu ref="modal" />
  </nav>
</template>

<script>
import ThemeToggleButton from "../Shared/ThemeToggleButton/ThemeToggleButton.vue";
import LanguageToggleButton from "../Shared/LanguageToggleButton/LanguageToggleButton.vue";
import TheTopbar from "./TheTopbar.vue";
import TheNavbarMenu from "./atoms/TheNavbarMenu.vue";

export default {
  components: {
    TheTopbar,
    ThemeToggleButton,
    LanguageToggleButton,
    TheNavbarMenu,
  },
  name: "TheNavbar",
  methods: {
    openModal() {
      this.$refs.modal.openModal();
    },
  },
};
</script>
