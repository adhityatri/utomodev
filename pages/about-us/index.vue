<template>
    <div>
        <UContainer as="div" class="py-8 text-start mb-10">
            <div class="h-[400px] overflow-hidden mt-[2em] flex rounded-lg shadow-lg ring-2 ring-white">
                <img class="object-cover w-full h-full" src="/about-image.avif" alt="about-image" />
            </div>
            <p class="text-[1.5rem] mt-[4em] mb-[2em]">
                <b>UtomoSolutions</b> was founded with a single mission to empower businesses through
                digitalization. We're
                proud
                to have guided numerous organizations on their digital transformation journeys. <br />Today,
                UtomoSolutions is
                dedicated to helping businesses unlock and process the significant income potential that exists
                within the digital community.
            </p>
            <div class="flex flex-col gap-4">
                <div class="flex-1/2">
                    <h1 class="font-bold mb-2">Office</h1>
                    <p>{{ PROFILE.address }}</p>
                    <p class="mb-2">{{ PROFILE.city }}</p>
                    <p>Phone: {{ PROFILE.contact[0].value }}</p>
                    <p>Email: {{ PROFILE.contact[1].value }}</p>
                </div>
                <div class="rounded-lg overflow-hidden mt-4 ring-2 ring-white shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d246.84346296014715!2d113.68284013847163!3d-8.152737585500942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1749789425497!5m2!1sid!2sid"
                        width="100%" height="300" style="border:0;" allowfullscreen="false" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </UContainer>
        <div class="bg-gradient-to-t from-primary/20">
            <UContainer as="div" class="text-center h-[400px] flex flex-col items-center justify-center">
                <p class="text-[2rem] font-bold mb-4">Ready To Move Forward With Us?</p>
                <p class="text-[1.2rem] mb-8 w-[70%] place-self-center">Let’s build something great together.
                    Utomosolutions helps simplify your workflow so you can focus on what really matters.</p>
                <app-contact-button class="bg-primary-900" size="xl" />
            </UContainer>
        </div>
    </div>
</template>

<script setup lang="ts">
import {PROFILE} from '~/constants/profile'
useHead({
    title: 'About Us - Utomosolutions',
    meta: [
        {
            name: 'description',
            content: 'Learn more about UtomoSolutions and our mission to empower businesses through digitalization. We help businesses unlock their digital potential.'
        },
        {
            name: 'keywords',
            content: 'UtomoSolutions, about us, digital potential, digitalization, business empowerment, technology solutions, web development, mobile development'
        },
        // Open Graph / Facebook
        {
            property: 'og:type',
            content: 'website'
        },
        {
            property: 'og:url',
            content: 'https://utomosolutions.com/about-us'
        },
        {
            property: 'og:title',
            content: 'About Us - Utomosolutions'
        },
        {
            property: 'og:description',
            content: 'Learn more about UtomoSolutions and our mission to empower businesses through digitalization. We help businesses unlock their digital potential.'
        },
        {
            property: 'og:image',
            content: 'https://utomosolutions.com/about-image.avif' // Pastikan gambar ini ada di folder public dan pathnya benar
        },
        // Twitter
        {
            property: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            property: 'twitter:url',
            content: 'https://utomosolutions.com/about-us'
        },
        {
            property: 'twitter:title',
            content: 'About Us - Utomosolutions'
        },
        {
            property: 'twitter:description',
            content: 'Learn more about UtomoSolutions and our mission to empower businesses through digitalization. We help businesses unlock their digital potential.'
        },
        {
            property: 'twitter:image',
            content: 'https://utomosolutions.com/about-image.avif' // Pastikan gambar ini ada di folder public dan pathnya benar
        },
        {
            name: 'robots',
            content: 'index, follow'
        }
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://utomosolutions.com/about-us'
        }
    ],
})
</script>