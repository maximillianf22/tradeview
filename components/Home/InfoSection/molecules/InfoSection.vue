<template>
  <section class="bg-white dark:bg-secondary py-20 px-3 custom-shadow">
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <info-card
        v-for="infoCard in infoCards"
        :key="infoCard.name"
        :icon="infoCard.icon"
        :title="$t(infoCard.title)"
        :description="$t(infoCard.description)"
      />
    </div>
  </section>
</template>

<script>
import InfoCard from "../atoms/InfoCard.vue";
export default {
  components: { InfoCard },
  name: "InfoSection",
  data() {
    return {
      infoCards: [
        {
          title: "info-cards.ideal-for-beginner-clients",
          icon: "/images/InfoSection/icons/leaft.svg",
          description: "info-cards.increase-trading-volumes",
        },
        {
          title: "info-cards.low-barriers-to-entry",
          icon: "/images/InfoSection/icons/lock.svg",
          description: "info-cards.communi-traders-software-is-free",
        },
        {
          title: "info-cards.simple-interface",
          icon: "/images/InfoSection/icons/magic.svg",
          description: "info-cards.a-simple-gui-provides-needed-features",
        },
        {
          title: "info-cards.no-long-term-commitments",
          icon: "/images/InfoSection/icons/link.svg",
          description: "info-cards.clients-can-easily-signup",
        },
        {
          title: "info-cards.funds-safety",
          icon: "/images/InfoSection/icons/shield.svg",
          description:
            "info-cards.communi-traders-benefits-from-the-same-regulation",
        },
        {
          title: "info-cards.tradeview-runs-communi-trader",
          icon: "/images/InfoSection/icons/quality.svg",
          description: "info-cards.you-will-experience-the-tradeview-service",
        },
      ],
    };
  },
};
</script>
