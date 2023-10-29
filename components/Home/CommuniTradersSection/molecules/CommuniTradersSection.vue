<template>
  <div class="bg-secondary py-20 text-center">
    <h1 class="text-xl lg:text-2xl font-bold text-white">
      {{ $t("try-communi-traders-now") }}
    </h1>
    <call-action-buttons />
  </div>
</template>

<script>
import CallActionButtons from "~/components/Shared/CallActionButtons/CallActionButtons.vue";
export default {
  components: { CallActionButtons },
};
</script>
