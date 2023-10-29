<template>
  <div class="bg-[#f2f2f2] dark:bg-[#202a37] px-3 py-10 lg:px-10">
    <div
      class="container mx-auto flex items-center flex-col lg:flex-row text-secondary dark:text-white"
    >
      <div class="w-full lg:w-1/2 text-center lg:text-start mb-5 lg:mb-0">
        <h1 class="text-xl lg:text-2xl font-bold">
          {{ $t("tools.leading-edge-technology") }}
        </h1>
        <p class="text-md lg:text-xl font-light my-4 lg:max-w-[75%]">
          {{ $t("tools.easy-to-use-management-tools") }}
        </p>
        <a href="" class="text-sm underline font-light">
          {{ $t("tools.quick-guide-link") }}
          <span v-html="$t('tools.external-link-icon')"></span>
        </a>
      </div>
      <div class="w-full lg:w-1/2">
        <img
          src="/images/ToolsSection/tools.png"
          alt="Imagen"
          class="max-w-full h-auto max-h-[300px] lg:max-h-[400px] mx-auto"
        />
      </div>
    </div>
  </div>
</template>
