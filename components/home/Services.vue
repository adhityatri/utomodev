<template>
    <UContainer as="section" class="py-[6em] ">
        <h1 class="mb-8 text-[2rem] font-medium leading-10">Explore what <br/> we offer</h1>
        <div class="inline-flex gap-6 overflow-auto w-[100%] p-2">
            <UCard v-for="(service, index) in SERVICES" :key="index">
                <UIcon :name="service.icon" class="text-[2rem]" />
                <h2 class="mb-2 text-[1.2rem] font-medium">{{ service.title }}</h2>
                <p>{{ service.description }}</p>
            </UCard>
        </div>
    </UContainer>
</template>

<script setup lang="ts">
import {SERVICES} from '~/constants/services'
</script> 
