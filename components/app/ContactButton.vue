<template>
    <UButton class="rounded-lg px-4" :size="size ?? 'lg'">
        <UIcon name="solar:phone-outline" />
        Contact Us
    </UButton>
</template>

<script setup lang="ts">
interface Props {
    size: 'sm' | 'md' | 'lg' | 'xl',
}

const props = defineProps<Props>()
</script>