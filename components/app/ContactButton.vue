<template>
    <UButton class="px-4 rounded-full" :size="size ?? 'lg'" :color="props.color">
        <template #leading>
            <UIcon name="solar:phone-outline" />
        </template>
        Consult Now
    </UButton>
</template>

<script setup lang="ts">
interface Props {
    size?: 'sm' | 'md' | 'lg' | 'xl',
    color?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
    size: 'lg',
    color: 'primary'
})
</script>