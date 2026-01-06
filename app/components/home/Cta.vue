<template>
  <div class="flex gap-4">
    <app-contact-button size="xl" class="py-[12px] px-[30px]" />
    <UButton
      v-if="!isMobile"
      variant="outline"
      class="py-[12px] px-[30px] rounded-full text-gray-800"
      @click="onLearnMore"
    >
      {{ $t("learn-more") }}
    </UButton>
  </div>
</template>

<script setup lang="ts">
  const { isMobile } = useDevice();

  const onLearnMore = async () => {
    await navigateTo({ hash: "#services", replace: true });
  };
</script>
