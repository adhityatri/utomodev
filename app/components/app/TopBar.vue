<template>
  <div class="sticky top-0 z-10 bg-white" :class="{ 'shadow-lg': isScrolled }">
    <UContainer
      as="header"
      class="flex items-center justify-between gap-4 py-2"
      :class="{ 'py-4!': isMobile }"
    >
      <app-brand />

      <app-menu v-if="!isMobile" class="flex-1" />
      <div class="flex items-center gap-2" :class="{ 'flex-row-reverse': isMobile }">
        <app-menu v-if="isMobile" class="flex-1" />
        <app-contact-button v-if="!isMobile" size="lg" />
        <app-switch-lang />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
  import { useWindowScroll } from "@vueuse/core";
  const { isMobile } = useDevice();

  const { y } = useWindowScroll();
  const isScrolled = computed(() => y.value > 0);
</script>
