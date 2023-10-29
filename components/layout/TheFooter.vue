<template>
  <div class="bg-[#34363f] p-3">
    <div class="text-white container mx-auto py-20">
      <the-footer-links />
      <the-footer-news />
      <the-footer-terms />
      <the-footer-websites />
    </div>
  </div>
</template>

<script>
import TheFooterLinks from "./atoms/TheFooterLinks.vue";
import TheFooterNews from "./atoms/TheFooterNews.vue";
import TheFooterTerms from "./atoms/TheFooterTerms.vue";
import TheFooterWebsites from "./atoms/TheFooterWebsites.vue";
export default {
  components: {
    TheFooterLinks,
    TheFooterNews,
    TheFooterTerms,
    TheFooterWebsites,
  },
  name: "TheFooter",
};
</script>
