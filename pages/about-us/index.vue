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
                    <p>Jl. Mangunsarkoro 62, Gang Swadaya 3</p>
                    <p class="mb-2">Rambipuji, Jember</p>
                    <p>Phone: +6285158022805</p>
                    <p>Email: adhityatri.work@gmail.com</p>
                </div>
                <div class="rounded-lg overflow-hidden">
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

</script>