<template>
  <UApp class="flex flex-col">
    <NuxtRouteAnnouncer />
    <div class="flex flex-col flex-1">
      <app-top-bar />
      <div class="flex flex-col flex-1">
        <NuxtPage />
      </div>
      <app-footer />
    </div>
  </UApp>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: "Utomosolutions",
    ogTitle: "Utomosolutions - Perkuat bisnis melalui inovasi digital",
    description:
      "Partner digital Anda di Jember, membantu bisnis lokal membuka potensi melalui pengembangan web dan aplikasi mobile inovatif, desain UI/UX, serta solusi teknologi terdepan.",
    ogDescription:
      "Partner digital Anda di Jember, membantu bisnis lokal membuka potensi melalui pengembangan web dan aplikasi mobile inovatif, desain UI/UX, serta solusi teknologi terdepan.",
    ogImage: "https://utomosolutions.com/ogimage.jpg",
    twitterCard: "summary_large_image",
  });
</script>
