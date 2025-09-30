// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication", // atau 'LocalBusiness'
            name: "Utomo Solutions",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jl Kasuari Blok Kk3 No 31",
              addressLocality: "Jember",
              postalCode: "68117",
              addressRegion: "Jawa Timur",
              addressCountry: "ID",
            },
            telephone: "+62851-2803-1998",
            url: "https://utomosolutions.com",
          }),
        },
      ],
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxtjs/device",
    "@nuxtjs/sitemap",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore",
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"],
        ],
      },
    ],
    "@nuxtjs/mdc",
  ],
  css: ["~/assets/css/main.css"],
  ui: {
    colorMode: false,
  },
  runtimeConfig: {
    public: {
      baseAPI: process.env.base_api || "",
      baseImage: process.env.base_url || "",
    },
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  pinia: {
    storesDirs: ["~/stores/**"],
  },
  image: {
    imageengine: {
      baseUrl: "https://rvo5wybe.cdn.imgeng.in",
      modifier: {
        format: "avif",
        quality: "50%",
        fit: "cover",
      },
    },
  },
});
