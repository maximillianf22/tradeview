<template>
  <main>
    <hero-header />
    <div
      class="z-1 md:absolute 2xl:top-[1000px] top-[100vh] w-full max-w-[2300px]"
    >
      <info-section />
      <tools-section />
      <communi-traders-section />
      <the-footer />
    </div>
  </main>
</template>

<script>
import CommuniTradersSection from "~/components/Home/CommuniTradersSection/molecules/CommuniTradersSection.vue";
import HeroHeader from "~/components/Home/HeroHeader/molecules/HeroHeader.vue";
import InfoSection from "~/components/Home/InfoSection/molecules/InfoSection.vue";
import ToolsSection from "~/components/Home/ToolsSection/molecules/ToolsSection.vue";
import TheFooter from "~/components/layout/TheFooter.vue";

export default {
  components: {
    InfoSection,
    HeroHeader,
    ToolsSection,
    CommuniTradersSection,
    TheFooter,
  },
};
</script>
