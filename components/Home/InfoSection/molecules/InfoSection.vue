<template>
  <section class="bg-white dark:bg-secondary py-20 px-3 custom-shadow">
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <info-card
        v-for="infoCard in infoCards"
        :key="infoCard.name"
        :icon="infoCard.icon"
        :title="infoCard.title"
        :description="infoCard.description"
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
          title: "Ideal for Beginner Clients",
          icon: "/images/InfoSection/icons/leaft.svg",
          description:
            "Increase trading volumes as new traders gain comfort by following successful traders in forex markets and beyond into stocks, options, commodities, and more…",
        },
        {
          title: "Low Barriers to Entry",
          icon: "/images/InfoSection/icons/lock.svg",
          description:
            "CommuniTraders software is free and clients can start with just a $100 minimum investment.",
        },
        {
          title: "Simple Interface",
          icon: "/images/InfoSection/icons/magic.svg",
          description:
            "A simple GUI provides needed features and tools but isn’t bogged down by non-core features. This allows clients to get setup quickly and start trading.",
        },
        {
          title: "No Long-Term Commitments",
          icon: "/images/InfoSection/icons/link.svg",
          description:
            "Clients can easily signup to start, change signal providers, or stop the service. There is no long-term lockup.",
        },
        {
          title: "Funds Safety",
          icon: "/images/InfoSection/icons/shield.svg",
          description:
            "CommuniTraders benefits from the same strong regulation and banking partners standalone Tradeview clients enjoy along with transparency and negative balance protection.",
        },
        {
          title: "Tradeview Runs CommuniTrader",
          icon: "/images/InfoSection/icons/quality.svg",
          description:
            "You will experience the Tradeview service you know and love, no gimmicks or hidden fees, excellent live customer support, and your dedicated account manager.",
        },
      ],
    };
  },
};
</script>
