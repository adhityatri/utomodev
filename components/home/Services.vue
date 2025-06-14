<template>
    <div id="services" ref="services" class="bg-primary relative overflow-hidden">
        <img src="/cross-white.svg" width="200" class="absolute z-0 right-[15em] top-[40%] translate-y-[-50%]" :class="{'top-[20%]! right-[-5em]!' : isMobile}"
            alt="cross-white" />
        <UContainer as="section" class="py-[6em] z-1 relative">
            <text-heading class="text-white">Explore what <br /> we offer</text-heading>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-auto w-[100%] p-2">
                <UCard v-for="(service, index) in SERVICES" :key="index">
                    <UIcon :name="service.icon" class="text-[2rem]" />
                    <h2 class="mb-2 text-[1.2rem] font-bold">{{ service.title }}</h2>
                    <p>{{ service.description }}</p>
                </UCard>
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
import { SERVICES } from '~/constants/services'

const services = ref<HTMLElement | null>(null)
const { isMobile } = useDevice()
</script>
