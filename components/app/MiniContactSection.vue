<template>
    <div class="ring-1 py-4 bg-primary-600 text-white">
        <UContainer as="section" class="flex justify-between items-center">
            <ul class="flex gap-4">
                <li v-for="(social, index) in PROFILE.contact" :key="index" class="flex items-center gap-2">
                    <UIcon :name="social.icon" class="text-2xl" />
                    <span>{{ social.value }}</span>
                </li>
            </ul>
            <ul class="flex gap-4">
                <li v-for="(social, index) in PROFILE.social" :key="index" class="flex items-center">
                    <UIcon :name="social.icon" class="text-2xl" />
                    <span v-if="social.type !== 'icon-only'">{{ social.value }}</span>
                </li>
            </ul>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
import { PROFILE } from '~/constants/profile'
</script>