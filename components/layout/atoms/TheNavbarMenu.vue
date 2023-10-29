<template>
  <div
    v-if="isOpen"
    class="fixed flex items-center justify-center z-50 w-screen"
  >
    <div class="modal-overlay"></div>
    <div
      class="modal-container w-screen h-screen flex flex-col justify-between bg-secondary"
    >
      <div
        class="p-4 text-white text-center text-xl max-h-[80vh] overflow-y-auto"
      >
        <ul class="mt-4 space-y-4">
          <li>
            <a href="#" class="uppercase tracking-[.25em]">
              {{ $t("navbar.forex") }}
            </a>
          </li>
          <li>
            <a href="#" class="uppercase tracking-[.25em]">
              {{ $t("navbar.stocks") }}
            </a>
          </li>
          <li>
            <a href="#" class="uppercase tracking-[.25em]">
              {{ $t("navbar.futures") }}
            </a>
          </li>
          <li>
            <a href="#" class="tracking-[.15em]">TradeGATEHub</a>
          </li>
        </ul>
        <!-- Divider -->
        <hr class="border-t my-4" />
        <ul class="space-y-3 text-sm">
          <li>
            <a href="#">{{ $t("topbar.markets") }}</a>
          </li>
          <li>
            <a href="#">
              {{ $t("topbar.company") }}
              <i class="fa fa-chevron-down text-[9px]"></i>
            </a>
          </li>
          <li>
            <a href="#">{{ $t("topbar.accounts") }}</a>
          </li>
          <li>
            <a href="#">
              {{ $t("topbar.platforms") }}
              <i class="fa fa-chevron-down text-[9px]"></i>
            </a>
          </li>
          <li>
            <a href="#">{{ $t("topbar.pricing") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("topbar.introducing-brokers") }}</a>
          </li>
          <li>
            <a href="#">{{ $t("topbar.education") }}</a>
          </li>
          <li>
            <a href="#">
              {{ $t("topbar.support") }}
              <i class="fa fa-chevron-down text-[9px]"></i>
            </a>
          </li>
        </ul>
      </div>
      <button
        @click="closeModal"
        class="modal-close absolute top-[10px] right-[20px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current text-gray-500 hover:text-gray-700 w-6 h-6"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
};
</script>

<style>
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-container {
  max-width: 100%;
  max-height: 100%;
}
</style>
