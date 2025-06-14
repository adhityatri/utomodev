<template>
  <USlideover v-if="isMobile" title="Menu" close-icon="i-lucide-arrow-right">
    <UButton variant="ghost" color="primary" icon="i-heroicons-bars-3" aria-label="Open mobile menu" class="flex-none"
      @click="onMobileClick()" />

    <template #body>
      <UNavigationMenu @select="onMobileClick()" orientation="vertical" :items="items" class="w-full justify-center" />
    </template>
  </USlideover>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { isMobile } = useDevice()

const isMobileMenuOpen = ref(false);
const onMobileClick = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'solar:home-2-outline',
    to: '/',
    exact: true,
    exactHash: true,
  },
  {
    label: 'Services',
    icon: 'solar:slider-vertical-outline',
    exactHash: true,
    to: '/#services'
  },
  // {
  //   label: 'Blog',
  //   icon: 'solar:notebook-square-outline',
  //   to: '/blog',
  // },
  {
    label: 'About Us',
    icon: 'solar:user-hand-up-outline',
    to: '/about-us'
  }
])

</script>