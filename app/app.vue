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
  useHead({
    htmlAttrs: {
      class: "scroll-smooth",
    },
  });

  useSeoMeta({
    title: "Bitaska",
    ogTitle: "Bitaska - Perkuat bisnis melalui transformasi digital",
    description:
      "Partner digital Anda di Jember, membantu bisnis lokal membuka potensi melalui pengembangan web dan aplikasi mobile inovatif, desain UI/UX, serta solusi teknologi terdepan.",
    ogDescription:
      "Partner digital Anda di Jember, membantu bisnis lokal membuka potensi melalui pengembangan web dan aplikasi mobile inovatif, desain UI/UX, serta solusi teknologi terdepan.",
    ogImage: "https://bitaska.my.id/ogimage.jpg",
    twitterCard: "summary_large_image",
  });
</script>
