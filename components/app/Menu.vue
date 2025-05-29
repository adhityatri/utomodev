<template>
    <UNavigationMenu :items="items" class="w-full justify-center"/>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'solar:home-2-outline',
    to: '/getting-started',
  },
  {
    label: 'Services',
    icon: 'solar:slider-vertical-outline',
    to: '/getting-started',
  },
  {
    label: 'Pricing',
    icon: 'solar:tag-price-outline',
    to: '/getting-started',
  },
  {
    label: 'Blog',
    icon: 'solar:notebook-square-outline',
    to: '/getting-started',
  },
  {
    label: 'About Us',
    icon: 'solar:user-hand-up-outline',
    to: '/getting-started',
  }
])
</script>