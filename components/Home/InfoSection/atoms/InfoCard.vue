<template>
  <div class="bg-white dark:bg-[#202a37] p-7 rounded-0 custom-shadow">
    <NuxtImg :src="props.icon" :alt="props.title" width="50px" height="50px" />
    <h3 class="text-md lg:text-lg font-bold mt-4 text-primary">
      {{ props.title }}
    </h3>
    <p
      class="mt-2 font-light text-[#363636] dark:text-white text-sm lg:text-md"
    >
      {{ props.description }}
    </p>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  icon: string;
  title: string;
  description: string;
}

const props = defineProps<Props>();
</script>

<style>
.custom-shadow {
  box-shadow: 0px 0px 30px #00000014;
  opacity: 1;
}
</style>
