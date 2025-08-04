<template>
  <USlideover v-if="isMobile" v-model:open="open" title="Menu" close-icon="i-lucide-arrow-right">
    <UButton variant="ghost" color="primary" icon="i-heroicons-bars-3" aria-label="Open mobile menu" class="flex-none"/>

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
import type { NavigationMenuItem } from '@nuxt/ui'

const { isMobile } = useDevice()
const open = ref(false);

const menuItems = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'solar:home-2-outline',
    to: '/',
    exact:true,
    exactHash: true,
    onSelect: () => open.value = false
  },
  {
    label: 'Services',
    icon: 'solar:slider-vertical-outline',
    to: '/#services',
    exactHash: true,
    onSelect: () => open.value = false
  },
  // {
  //   label: 'Blog',
  //   icon: 'solar:notebook-square-outline',
  //   to: '/blog',
  // },
  {
    label: 'About Us',
    icon: 'solar:user-hand-up-outline',
    to: '/about-us',
    onSelect: () => open.value = false
  }
])
</script>