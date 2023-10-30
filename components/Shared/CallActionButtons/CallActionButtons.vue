<template>
  <div
    class="flex items-center justify-center mt-10 text-xs lg:text-sm max-w-[100%] overflow-hidden"
  >
    <div class="border-r p-3 lg:p-8">
      <p class="text-white font-light">
        {{ $t("call-actions.free-download") }}
      </p>
      <button
        id="contact-broker-button"
        href="#"
        class="mt-4 bg-transparent hover:bg-[#ffffff4f] text-white rounded-0 w-[130px] lg:w-[170px] h-[35px] border-2"
        aria-label="{{ $t('call-actions.contact-broker') }}"
      >
        {{ $t("call-actions.contact-broker") }}
      </button>
    </div>
    <div class="p-3 lg:p-8">
      <p class="text-white font-light">
        {{ $t("call-actions.dont-have-account") }}
      </p>
      <button
        id="get-demo-button"
        href="#"
        class="mt-4 bg-primary hover:bg-transparent hover:border-2 text-white rounded-0 w-[130px] lg:w-[170px] h-[35px]"
        aria-label="{{ $t('call-actions.get-demo') }}"
      >
        {{ $t("call-actions.get-demo") }}
      </button>
    </div>
  </div>
</template>
