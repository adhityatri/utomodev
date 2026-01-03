<template>
  <UContainer as="main" class="py-12 flex flex-col gap-2 flex-1">
    <div class="flex flex-col items-start gap-2 mb-12">
      <h1 class="font-bold text-[3em] text-primary">Blogs & Articles</h1>
      <h3 class="text-xl">Our latest news, updates, and stories</h3>
    </div>

    <div v-for="(item, index) in articles" :key="item.title" class="flex flex-col gap-8 mb-20">
      <div class="flex flex-col">
        <h2 class="font-bold text-3xl">{{ item.title }}</h2>
        <small class="mt-2 mb-8">
          Adhitya Tri, {{ useDateFormat(item?.meta?.publishedAt, "D MMMM YYYY") }}
        </small>
      </div>

      <ContentRenderer v-if="item" class="text-xl" :value="item" />
      <USeparator v-if="index < articles?.length - 1" label="utomosolutions.com" />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
  definePageMeta({
    name: "Blog",
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  });

  const { data: articles } = await useAsyncData("articles-blog-home", () =>
    queryCollection("content").all(),
  );
</script>
