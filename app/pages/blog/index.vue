<template>
  <UContainer as="main" class="py-12 flex flex-col gap-2 flex-1">
    <div class="flex flex-col items-start gap-2 mb-12">
      <h1 class="font-bold text-[3em] text-primary">Blogs & Articles</h1>
      <h3 class="text-xl">Our latest news, updates, and stories</h3>
    </div>

    <div v-for="item in articles" :key="item.title" class="mx-auto">
      <div class="flex flex-col">
        <h2 class="font-bold text-3xl">{{ item.title }}</h2>
        <small class="mt-2 mb-8">
          Adhitya Tri, {{ useDateFormat(item.publishedAt, "D MMMM YYYY") }}
        </small>
      </div>

      <ContentRenderer class="text-xl" :value="item!" />
    </div>

    <!-- <div class="flex flex-col gap-4 items-center justify-center">
      <nuxt-img
        provider="imageengine"
        src="machine-learning.svg"
        alt="empty-blog"
        class="h-[250px]"
      />
      <p class="text-xl text-center mt-4">Duduk santai dulu, kami sedang merangkai kata.</p>
    </div> -->

    <!-- <div v-for="blog in blogStore.blogs" :key="blog.id">
      <div
        v-for="banner in blog.banner"
        :key="banner.id"
        class="w-[450px] h-[300px] shadow-xl shadow-neutral-300 rounded-lg overflow-hidden relative ring-2 ring-white"
      >
        <img :src="banner.url" class="w-full h-full object-contain" />
      </div>
      <h1 class="font-bold text-lg mt-8">{{ blog.title }}</h1>
      <small>{{ useDateFormat(blog.publishedAt, "D MMMM YYYY") }}</small>
      <MDC :value="blog.content" class="mt-6" />
    </div> -->
  </UContainer>
</template>

<script setup lang="ts">
  // import { useBlogs } from "~/stores/blogs";
  // import { marked } from "marked";

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

  // const blogStore = useBlogs();
  // await useAsyncData("blog-index", () => blogStore.fetch(), {
  //   dedupe: "defer",
  //   server: false,
  //   lazy: true,
  // });

  // marked.setOptions({
  //   breaks: true, // Mengubah single line break menjadi <br>
  //   gfm: true, // GitHub Flavored Markdown
  // });

  // const renderMarkdown = (text: string) => {
  //   if (!text) return "";
  //   return marked.parse(text);
  // };
</script>
