<template>
  <div class="sticky top-0 z-10 bg-white" :class="{ 'shadow-lg': isScrolled }">
    <UContainer
      as="header"
      class="flex items-center justify-between gap-4 py-2"
      :class="{ 'py-4!': isMobile }"
    >
      <app-brand />
      <app-menu class="flex-1" />
      <app-contact-button v-if="!isMobile" size="lg" />
      <div
        class="flex items-center justify-center ring-1 ring-neutral-200 rounded-full overflow-hidden"
      >
        <UButton
          v-for="locale in locales"
          :key="locale.code"
          size="lg"
          :variant="useCookieLocale().value === locale.code ? 'solid' : 'ghost'"
          :ui="{
            base: 'rounded-none',
          }"
          @click="setLocale(locale.code)"
        >
          {{ locale.code }}
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
  import { useWindowScroll } from "@vueuse/core";
  const { isMobile } = useDevice();
  const { locales, setLocale } = useI18n();

  const { y } = useWindowScroll();
  const isScrolled = computed(() => y.value > 0);
</script>
