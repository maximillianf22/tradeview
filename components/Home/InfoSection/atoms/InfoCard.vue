<template>
  <div class="bg-white p-4 rounded-md shadow-md">
    <div class="text-3xl text-blue-500">{{ props.icon }}</div>
    <h3 class="text-xl font-semibold mt-4">{{ props.title }}</h3>
    <p class="mt-2 text-gray-600">{{ props.description }}</p>
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
