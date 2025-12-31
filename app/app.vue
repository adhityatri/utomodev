<template>
  <UApp class="flex flex-col">
    <NuxtRouteAnnouncer />
    <div class="flex flex-col flex-1">
      <app-top-bar />
      <div class="flex flex-col flex-1">
        <NuxtPage />
        <SpeedInsights />
      </div>
      <app-footer />
    </div>
  </UApp>
</template>

<script setup lang="ts">
  import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>
