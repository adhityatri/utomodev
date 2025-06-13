<template>
    <UNavigationMenu :items="items" class="w-full justify-center"/>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'solar:home-2-outline',
    to: '/',
    exact: true,
    exactHash: true
  },
  {
    label: 'Services',
    icon: 'solar:slider-vertical-outline',
    exactHash: true,
    to: '/#services',
  },
  {
    label: 'Blog',
    icon: 'solar:notebook-square-outline',
    to: '/blog',
  },
  {
    label: 'About Us',
    icon: 'solar:user-hand-up-outline',
    to: '/about-us',
  }
])
</script>