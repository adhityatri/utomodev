<template>
    <UContainer as="footer" class="mt-8 py-6 flex justify-between">
        <div class="flex-1">
            <h1 class="font-bold mb-2">Office</h1>
            <p>{{ PROFILE.address }}</p>
            <p class="mb-2">{{ PROFILE.city }}</p>
            <p>Phone: +6285158022805</p>
            <p>Email: adhityatri.work@gmail.com</p>
        </div>
        <app-brand />
    </UContainer>
</template>

<script setup lang="ts">
import { PROFILE } from '~/constants/profile'
</script>