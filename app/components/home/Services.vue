<template>
  <div id="services" ref="services" class="bg-primary relative overflow-hidden">
    <img
      src="/cross-white.svg"
      width="200"
      class="absolute z-0 right-[15em] top-[40%] translate-y-[-50%]"
      :class="{ 'top-[20%]! right-[-5em]!': isMobile }"
      alt="cross-white"
    />
    <UContainer as="section" class="py-[6em] z-1 relative">
      <text-heading class="text-white whitespace-pre-line">
        {{ $t("offer-title") }}
        <p class="text-white text-[1.2rem] font-normal whitespace-pre-line">
          {{ $t("offer-sub-title") }}
        </p>
      </text-heading>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-auto w-[100%] p-2">
        <UCard v-for="(service, index) in data" :key="index">
          <UIcon :name="service.icon" class="text-[2rem]" />
          <h2 class="mb-2 text-[1.2rem] font-bold">{{ service.title }}</h2>
          <p>{{ service.description }}</p>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
  import { SERVICES } from "~/constants/services";

  const { isMobile } = useDevice();
  const data = computed(() => [
    {
      title: "Web Development",
      description: $t("offer.webdev"),
      icon: "solar:code-2-bold",
    },
    {
      title: "Mobile App Development",
      description: $t("offer.mobile"),
      icon: "solar:iphone-line-duotone",
    },
    {
      title: "UI/UX Design",
      description: $t("offer.uiux"),
      icon: "solar:gallery-edit-linear",
    },
    {
      title: "E-commerce Solutions",
      description: $t("offer.ecommerce"),
      icon: "solar:ruler-pen-line-duotone",
    },
  ]);
</script>
