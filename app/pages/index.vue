<template>
  <main>
    <home-hero />
    <app-mini-contact-section v-if="!isMobile" />
    <home-services id="services" />
    <home-process />
    <app-c-t-a-sections />
  </main>
</template>

<script setup lang="ts">
  const { isMobile } = useDevice();

  useHead({
    title: "Utomosolutions",
    meta: [
      {
        name: "description",
        content:
          "Partner digital Anda di Jember, membantu bisnis lokal membuka potensi melalui pengembangan web dan aplikasi mobile inovatif, desain UI/UX, serta solusi teknologi terdepan.",
      },
      {
        name: "keywords",
        content:
          "it konsultan, digital it, software house, jember, Utomosolutions, web development, mobile development, UI/UX design, technology solutions, digital potential, software development, IT services",
      },
      // Open Graph / Facebook
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://utomosolutions.com/",
      },
      {
        property: "og:title",
        content: "Utomosolutions - Perkuat bisnis melalui inovasi digital",
      },
      {
        property: "og:description",
        content:
          "Partner digital Anda di Jember, membantu bisnis lokal membuka potensi melalui pengembangan web dan aplikasi mobile inovatif, desain UI/UX, serta solusi teknologi terdepan.",
      },
      {
        property: "og:image",
        content: "https://utomosolutions.com/ogimage.jpg", // Ganti dengan path gambar Open Graph utama Anda
      },
      // Twitter
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        property: "twitter:url",
        content: "https://utomosolutions.com/",
      },
      {
        property: "twitter:title",
        content: "Utomosolutions",
      },
      {
        property: "twitter:description",
        content:
          "Partner digital Anda di Jember, membantu bisnis lokal membuka potensi melalui pengembangan web dan aplikasi mobile inovatif, desain UI/UX, serta solusi teknologi terdepan.",
      },
      {
        property: "twitter:image",
        content: "https://utomosolutions.com/ogimage.jpg", // Ganti dengan path gambar Twitter Card utama Anda
      },
      {
        name: "robots",
        content: "index, follow",
      },
    ],
    link: [
      {
        rel: "canonical",
        href: "https://utomosolutions.com/",
      },
    ],
  });
</script>
