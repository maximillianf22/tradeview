<template>
  <div class="bg-gray-100 p-8">
    <div class="container mx-auto flex items-center">
      <div class="w-1/2">
        <img src="/path-to-image.png" alt="Imagen" class="max-w-full h-auto" />
      </div>
      <div class="w-1/2 pl-8">
        <img src="path-to-header-section" title="Communi Traders" />
        <h2 class="text-xl text-gray-600">
          Tradeview’s CommuniTraders software lets our partners provide
          value-added copy trading to their clients.
        </h2>
        <call-action-buttons />
      </div>
    </div>
  </div>
</template>

<script>
import CallActionButtons from "~/components/Shared/CallActionButtons/CallActionButtons.vue";
export default {
  components: { CallActionButtons },
};
</script>
