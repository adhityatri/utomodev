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
useHead({
    title: 'Utomosolutions - Empowering Your Digital Potential',
    meta: [
        {
            name: 'description',
            content: 'Utomosolutions helps businesses unlock their digital potential through innovative web and mobile development, UI/UX design, and technology solutions.'
        },
        {
            name: 'keywords',
            content: 'Utomosolutions, web development, mobile development, UI/UX design, technology solutions, digital potential, software development, IT services'
        },
        // Open Graph / Facebook
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://utomosolutions.com/'
        },
        {
            property: 'og:title',
            content: 'Utomosolutions - Empowering Your Digital Potential'
        },
        {
            property: 'og:description',
            content: 'Utomosolutions helps businesses unlock their digital potential through innovative web and mobile development, UI/UX design, and technology solutions.'
        },
        {
            property: 'og:image',
            content: 'https://utomosolutions.com/og-image.png' // Ganti dengan path gambar Open Graph utama Anda
        },
        // Twitter
        {
            property: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            property: 'twitter:url',
            content: 'https://utomosolutions.com/'
        },
        {
            property: 'twitter:title',
            content: 'Utomosolutions - Empowering Your Digital Potential'
        },
        {
            property: 'twitter:description',
            content: 'Utomosolutions helps businesses unlock their digital potential through innovative web and mobile development, UI/UX design, and technology solutions.'
        },
        {
            property: 'twitter:image',
            content: 'https://utomosolutions.com/twitter-image.png' // Ganti dengan path gambar Twitter Card utama Anda
        },
        {
            name: 'robots',
            content: 'index, follow'
        }
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://utomosolutions.com/'
        }
    ],
})

const { isMobile } = useDevice()
</script>