<template>
  <UContainer as="section" class="py-[4em] relative overflow-hidden">
    <div
      class="bg-primary py-[6em] px-[4em] rounded-xl text-center text-white"
      :class="{ 'px-[1em]! py-[2em]!': isMobile }"
    >
      <p class="text-[2rem] font-bold mb-4">{{ $t("cta.title") }}</p>
      <p class="text-[1.2rem] mb-8 w-[70%] place-self-center" :class="{ 'w-full!': isMobile }">
        {{ $t("cta.subtitle") }}
      </p>
      <app-contact-button class="bg-primary-900" size="xl" />
    </div>
    <img
      src="/cross-white.svg"
      type="image/svg+xml"
      alt="cross-white"
      class="absolute opacity-20 top-[50%] right-[-4em] translate-y-[-50%]"
    />
  </UContainer>
</template>

<script setup lang="ts">
  const { isMobile } = useDevice();
</script>
