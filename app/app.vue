<template>
  <UApp class="flex flex-col">
    <NuxtRouteAnnouncer />
    <div class="flex flex-col flex-1">
      <app-top-bar class="z-100" />
      <div class="flex flex-col flex-1">
        <NuxtPage />
      </div>
      <app-footer />
    </div>
  </UApp>
</template>

<script setup lang="ts">
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://bitaska.my.id/#organization",
    name: "Bitaska",
    alternateName: "Bitaska Labs",
    description:
      "Software house dan konsultan IT di Jember yang membantu bisnis lokal lewat pembuatan website, aplikasi mobile, desain UI/UX, dan solusi e-commerce.",
    url: "https://bitaska.my.id/",
    logo: "https://bitaska.my.id/brand-sub.png",
    image: "https://bitaska.my.id/ogimage.jpg",
    telephone: "+6285128031998",
    email: "hello@bitaska.my.id",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Kasuari Blok KK3 No 31",
      addressLocality: "Patrang, Jember",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
      postalCode: "68117",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -8.1527376,
      longitude: 113.6828401,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Jember" },
      { "@type": "Country", name: "Indonesia" },
    ],
    knowsLanguage: ["id", "en"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Bitaska",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pembuatan Website",
            description: "Website yang cepat, responsif, dan dioptimalkan untuk SEO.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pembuatan Aplikasi Mobile",
            description:
              "Aplikasi mobile untuk iOS dan Android dengan fokus pada performa dan keamanan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desain UI/UX",
            description: "Rancangan tampilan yang menarik, intuitif, dan mudah digunakan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Solusi E-commerce",
            description: "Toko online yang aman dan siap berkembang.",
          },
        },
      ],
    },
  };

  useHead({
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(schema),
      },
    ],
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
