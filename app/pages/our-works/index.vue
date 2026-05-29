<template>
  <UContainer as="main" class="py-12 flex flex-col gap-2 flex-1"> Our Works Page </UContainer>
</template>

<script setup lang="ts">
  definePageMeta({
    name: "works",
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  });
</script>
