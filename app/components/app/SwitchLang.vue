<template>
  <div
    class="flex items-center justify-center ring-1 ring-neutral-200 rounded-full overflow-hidden"
  >
    <UButton
      v-for="loc in locales"
      :key="loc.code"
      :size="isMobile ? 'sm' : 'lg'"
      :variant="currentLocale === loc.code ? 'solid' : 'ghost'"
      :ui="{
        base: 'rounded-none',
      }"
      @click="handleSetLocale(loc.code)"
    >
      {{ loc.code }}
    </UButton>
  </div>
</template>

<script setup lang="ts">
  import { computed } from "vue";

  const { locales, setLocale, locale } = useI18n();
  const cookieLocale = useCookieLocale();
  const { isMobile } = useDevice();

  const currentLocale = computed(() => cookieLocale.value || locale.value || "id");

  const handleSetLocale = (code: string) => {
    setLocale(code);
    cookieLocale.value = code;
  };
</script>
