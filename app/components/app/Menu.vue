<template>
  <USlideover v-if="isMobile" v-model:open="open" close-icon="i-lucide-arrow-right" title="Menu">
    <UButton
      variant="ghost"
      color="primary"
      icon="i-heroicons-bars-3"
      aria-label="Open mobile menu"
      class="flex-none"
    />

    <template #header>
      <div class="flex justify-between items-center flex-1 px-2">
        <app-brand />
        <UButton
          icon="i-lucide-indent-increase"
          variant="soft"
          size="md"
          class="cursor-pointer"
          @click="open = false"
        />
      </div>
    </template>

    <template #body>
      <UNavigationMenu :items="menuItems" orientation="vertical" class="w-full justify-center" />
    </template>
  </USlideover>

  <UNavigationMenu v-else :items="menuItems" class="w-full justify-center" />
</template>

<script setup lang="ts">
  import type { NavigationMenuItem } from "@nuxt/ui";

  const { isMobile } = useDevice();
  const open = ref(false);

  const menuItems = computed(() => [
    {
      label: $t("menu.home"),
      icon: "solar:home-2-outline",
      to: "/",
      exact: true,
      exactHash: true,
      onSelect: () => (open.value = false),
    },
    {
      label: $t("menu.services"),
      icon: "solar:slider-vertical-outline",
      to: "/#services",
      exactHash: true,
      onSelect: () => (open.value = false),
    },
    // {
    //   label: $t("menu.works"),
    //   icon: "solar:notebook-square-outline",
    //   to: "/our-works",
    //   exactHash: true,
    //   onSelect: () => (open.value = false),
    // },
    // {
    //   label: $t("menu.blog"),
    //   icon: "solar:notebook-square-outline",
    //   to: "/blog",
    //   exactHash: true,
    //   onSelect: () => (open.value = false),
    // },
    {
      label: $t("menu.about"),
      icon: "solar:user-hand-up-outline",
      to: "/about-us",
      onSelect: () => (open.value = false),
    },
  ]);
</script>
