<template>
  <divn class="fixed w-full z-[-1]">
    <div class="h-[100vh] overflow-hidden max-h-[1000px]">
      <div class="mx-auto flex items-center container-fluid">
        <img
          src="/images/HeroHeader/bg-hero.png"
          alt="Imagen"
          class="h-screen object-cover w-[45%] max-w-[750px] max-h-[1000px] hidden lg:block"
        />
        <div
          class="w-full bg-secondary flex-1 h-screen items-center flex max-h-[1000px] pt-10 lg:pt-[150px] px-5 lg:px-0"
        >
          <div class="text-center w-full">
            <img
              src="/images/HeroHeader/title.svg"
              title="Communi Traders"
              class="mx-auto pb-5 max-w-[300px]"
            />

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
  </divn>
</template>

<script>
import CallActionButtons from "~/components/Shared/CallActionButtons/CallActionButtons.vue";
export default {
  components: { CallActionButtons },
};
</script>
