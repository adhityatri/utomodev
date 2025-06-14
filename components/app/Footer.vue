<template>
    <UContainer as="footer" class="mt-8 py-6 flex justify-between items-start" :class="{'flex-col-reverse' : isMobile }">
        <div class="flex-1">
            <h1 class="font-bold mb-2">Office</h1>
            <p>{{ PROFILE.address }}</p>
            <p class="mb-2">{{ PROFILE.city }}</p>
            <p>Phone: {{ PROFILE.contact[0].value }}</p>
            <p>Email: {{ PROFILE.contact[1].value }}</p>
        </div>
        <app-brand :class="{'mb-4!' : isMobile}"/>
    </UContainer>
</template>

<script setup lang="ts">
import { PROFILE } from '~/constants/profile'

const { isMobile } = useDevice();
</script>