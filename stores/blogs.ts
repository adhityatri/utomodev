interface blogs {
  title: string;
  id: string;
  content: string;
  publishedAt: string;
  banner: {
    id: string;
    url: string;
  }[];
}

const useBlogs = defineStore("blogs", () => {
  const blogs = ref<blogs[]>([]);
  const fetch = async () => {
    try {
      const response = $fetch("/api/blogs?populate=*", {
        method: "GET",
        onResponse({ response }) {
          blogs.value = response._data?.data;
        },
        onResponseError({ response }) {
          console.log("onResponseError", response);
        },
      });

      return response;
    } catch (error) {
      return error;
    }
  };

  return {
    blogs,
    fetch,
  };
});

export { useBlogs };
