<template>
  <div class="top-bar pt-6 hidden xl:flex">
    <div
      class="space-x-12 text-sm text-white container mx-auto items-center font-light"
    >
      <a href="#" class="">Markets</a>
      <a href="#" class=""
        >Company <i class="fa fa-chevron-down text-[9px]"></i
      ></a>
      <a href="#" class="">Accounts</a>
      <a href="#" class=""
        >Platforms <i class="fa fa-chevron-down text-[9px]"></i
      ></a>
      <a href="#" class="">Pricing</a>
      <a href="#" class="">Introducing Brokers</a>
      <a href="#" class="">Education</a>
      <a href="#" class=""
        >Support <i class="fa fa-chevron-down text-[9px]"></i
      ></a>
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
