<template>
  <hero-header />
  <info-section />
  <tools-section />
  <communi-traders-section />
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
