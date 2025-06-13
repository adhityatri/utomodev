<template>
  <div class="sticky top-0 z-10 bg-white" :class="{ 'shadow-lg': isScrolled }">
    <UContainer as="nav" class="flex items-center justify-between gap-4 py-2">
      <app-brand />
      <app-menu class="flex-1" />
      <app-contact-button size="lg" />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';

const { y } = useWindowScroll();
const isScrolled = computed(() => y.value > 0);
</script>