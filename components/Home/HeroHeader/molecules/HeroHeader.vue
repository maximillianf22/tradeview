<template>
  <div class="md:fixed w-full max-w-[2300px] min-h-[550px]">
    <div class="h-[100vh] min-h-[550px] overflow-hidden max-h-[1000px]">
      <div class="mx-auto flex items-center container-fluid">
        <NuxtImg
          format="webp"
          src="/images/HeroHeader/bg-hero.webp"
          alt="Imagen"
          class="h-screen object-cover w-[45%] max-w-[750px] max-h-[1000px] hidden lg:block"
        />
        <div
          class="w-full bg-secondary flex-1 h-screen items-center flex max-h-[1000px] pt-10 lg:pt-[150px] px-3 lg:px-0 min-h-[550px]"
        >
          <div class="text-center w-full">
            <img
              src="/images/HeroHeader/title.svg"
              title="Communi Traders"
              class="mx-auto pb-5 max-w-[100%] md:max-w-[300px]"
              height="105px"
              width="300px"
            />
            <h1 class="hidden">Tradeview’s CommuniTraders</h1>
            <h2
              class="text-lg lg:text-2xl text-white mt-10 border-t max-w-[500px] mx-auto font-light p-2"
            >
              Tradeview’s
              <span class="font-black">CommuniTraders</span>
              {{ $t("header.header-intro") }}
            </h2>
            <call-action-buttons />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CallActionButtons from "~/components/Shared/CallActionButtons/CallActionButtons.vue";
export default {
  components: { CallActionButtons },
};
</script>
