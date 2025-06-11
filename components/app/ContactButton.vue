<template>
    <UButton class="px-4 rounded-full" :size="size ?? 'lg'" color="primary">
        <template #leading>
            <UIcon name="solar:phone-outline" />
        </template>
        Consult Now
    </UButton>
</template>

<script setup lang="ts">
interface Props {
    size: 'sm' | 'md' | 'lg' | 'xl',
}

const props = defineProps<Props>()
</script>