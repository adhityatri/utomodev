<template>
  <div
    class="flex items-center justify-center ring-1 ring-neutral-200 rounded-full overflow-hidden"
  >
    <UButton
      v-for="locale in locales"
      :key="locale.code"
      :size="isMobile ? 'sm' : 'lg'"
      :variant="useCookieLocale().value === locale.code ? 'solid' : 'ghost'"
      :ui="{
        base: 'rounded-none',
      }"
      @click="setLocale(locale.code)"
    >
      {{ locale.code }}
    </UButton>
  </div>
</template>

<script setup lang="ts">
  const { locales, setLocale } = useI18n();
  const { isMobile } = useDevice();
</script>
