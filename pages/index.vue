<template>
  <hero-header />
  <div class="z-1 pt-[100vh]">
    <info-section />
    <tools-section />
    <communi-traders-section />
  </div>
</template>

<script>
import CommuniTradersSection from "~/components/Home/CommuniTradersSection/molecules/CommuniTradersSection.vue";
import HeroHeader from "~/components/Home/HeroHeader/molecules/HeroHeader.vue";
import InfoSection from "~/components/Home/InfoSection/molecules/InfoSection.vue";
import ToolsSection from "~/components/Home/ToolsSection/molecules/ToolsSection.vue";

export default {
  components: { InfoSection, HeroHeader, ToolsSection, CommuniTradersSection },
};
</script>
