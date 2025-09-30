<template>
  <UContainer as="main" class="py-12 flex flex-col gap-2 flex-1">
    <div class="flex flex-col items-start gap-2 mb-12">
      <h1 class="font-bold text-[3em] text-primary">Blog</h1>
      <h3 class="text-xl">Our latest news, updates, and stories</h3>
    </div>

    <div class="flex flex-col gap-4 items-center justify-center">
      <nuxt-img
        provider="imageengine"
        src="machine-learning.svg"
        alt="empty-blog"
        class="h-[250px]"
      />
      <p class="text-xl text-center mt-4">Duduk santai dulu, kami sedang merangkai kata.</p>
    </div>

    <!-- <div v-for="blog in blogStore.blogs" :key="blog.id">
      <div
        v-for="banner in blog.banner"
        :key="banner.id"
        class="w-full h-[400px] shadow-xl shadow-neutral-300 rounded-lg overflow-hidden relative ring-2 ring-white"
      >
        <nuxt-img
          :src="banner.url"
          class="h-full w-full object-cover"
        />
      </div>
      <h1 class="font-bold text-lg mt-8">{{ blog.title }}</h1>
      <small>{{ useDateFormat(blog.publishedAt, "D MMMM YYYY") }}</small>
      <MDC :value="blog.content" class="mt-6" />
    </div> -->
  </UContainer>
</template>

<script setup lang="ts">
  // import { useBlogs } from "~/stores/blogs";

  definePageMeta({
    name: "Blog",
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  });

  // const blogStore = useBlogs();
  // await useAsyncData("blog-index", () => blogStore.fetch(), {
  //   dedupe: "defer",
  //   server: false,
  //   lazy: true,
  // });
</script>
