<template>
    <UButton class="px-4 rounded-full" :size="size ?? 'lg'" :color="props.color" @click="handleContact">
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

const handleContact = () => {
    const email = 'adhityatri.work@gmail.com';
    const subject = 'Project Inquiry';
    const mailtoUrl = `mailto:${encodeURIComponent(
        email
    )}?subject=${encodeURIComponent(subject)}&body=''`;
    window.location.href = mailtoUrl;
}
</script>