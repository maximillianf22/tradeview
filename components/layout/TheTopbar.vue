<template>
  <div class="top-bar pt-6 hidden xl:flex">
    <div
      class="space-x-12 text-sm text-white container mx-auto items-center font-light"
    >
      <a href="#" id="markets-link" aria-label="{{ $t('topbar.markets') }}">{{
        $t("topbar.markets")
      }}</a>
      <a href="#" id="company-link" aria-label="{{ $t('topbar.company') }}">
        {{ $t("topbar.company") }}
        <i class="fa fa-chevron-down text-[9px]"></i>
      </a>
      <a href="#" id="accounts-link" aria-label="{{ $t('topbar.accounts') }}">{{
        $t("topbar.accounts")
      }}</a>
      <a href="#" id="platforms-link" aria-label="{{ $t('topbar.platforms') }}">
        {{ $t("topbar.platforms") }}
        <i class="fa fa-chevron-down text-[9px]"></i>
      </a>
      <a href="#" id="pricing-link" aria-label="{{ $t('topbar.pricing') }}">{{
        $t("topbar.pricing")
      }}</a>
      <a
        href="#"
        id="introducing-brokers-link"
        aria-label="{{ $t('topbar.introducing-brokers') }}"
        >{{ $t("topbar.introducing-brokers") }}</a
      >
      <a
        href="#"
        id="education-link"
        aria-label="{{ $t('topbar.education') }}"
        >{{ $t("topbar.education") }}</a
      >
      <a href="#" id="support-link" aria-label="{{ $t('topbar.support') }}">
        {{ $t("topbar.support") }}
        <i class="fa fa-chevron-down text-[9px]"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style lang="css" scoped>
.top-bar {
  height: 100px;
  background: transparent
    linear-gradient(
      180deg,
      #181f29 0%,
      #181f29 15%,
      #181f2960 60%,
      #181f2900 100%
    )
    0% 0% no-repeat padding-box;
}
</style>
