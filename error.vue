<template>
    <UContainer as="main" class="flex flex-col flex-1 justify-center items-center">
        <img src="/interface-searching.svg" alt="not-found-image" width="400">
        <text-heading class="m-0! text-[4rem]! leading-[6rem]!">Oops...</text-heading>
        <p class="text-[1.5rem] w-120 text-center">It looks like you've landed on a page that doesn't exist.</p>
        <UButton class="mt-6" to="/" size="xl">Go Back</UButton>
    </UContainer>
</template>

<script setup lang="ts">
definePageMeta({
    title: 'Oops...Error page',
    name: 'error-pages',
    layout: false,
})
</script>