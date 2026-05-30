<script setup>
  import { ref, onMounted, onUnmounted, computed } from "vue";
  import HeroCard from "./HeroCard.vue";

  const containerRef = ref(null);
  const scrollProgress = ref(0);
  const isMounted = ref(false);

  const handleScroll = () => {
    if (!containerRef.value) return;
    const scrollTop = window.scrollY;
    const elementHeight = containerRef.value.offsetHeight || 800;
    // Calculate relative progress from start of section to end of section
    const progress = Math.min(Math.max(scrollTop / elementHeight, 0), 1);
    scrollProgress.value = progress;
  };

  onMounted(() => {
    isMounted.value = true;
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  // Parallax computed styles
  const imageStyle = computed(() => {
    const yVal = scrollProgress.value * 30;
    const scaleVal = 1 + scrollProgress.value * 0.15;
    return {
      transform: `translate3d(0, ${yVal.toFixed(2)}%, 0) scale(${scaleVal.toFixed(3)})`,
    };
  });

  const textStyle = computed(() => {
    const yVal = scrollProgress.value * -60;
    const opacityVal = Math.max(1 - scrollProgress.value * 2, 0);
    return {
      transform: `translate3d(0, ${yVal.toFixed(2)}%, 0)`,
      opacity: opacityVal.toFixed(2),
    };
  });

  const overlayStyle = computed(() => {
    const xVal = scrollProgress.value * 12;
    const yVal = scrollProgress.value * -8;
    const rotateVal = scrollProgress.value * 12;
    let opacityVal = 0.5;
    if (scrollProgress.value <= 0.5) {
      opacityVal = 0.5 + (scrollProgress.value / 0.5) * 0.2;
    } else {
      opacityVal = 0.7 - ((scrollProgress.value - 0.5) / 0.5) * 0.4;
    }
    return {
      transform: `translate3d(${xVal.toFixed(2)}%, ${yVal.toFixed(2)}%, 0) rotate(${rotateVal.toFixed(2)}deg)`,
      opacity: opacityVal.toFixed(2),
    };
  });

  const gridStyle = computed(() => {
    const yVal = scrollProgress.value * -50;
    return {
      transform: `translate3d(0, ${yVal.toFixed(1)}px, 0)`,
    };
  });

  const cards = [
    {
      id: "web",
      delay: "500ms",
      theme: "indigo",
      shadow: "rgba(79,70,229,0.06)",
      category: "Web Platform",
      title: "Web Dev",
      bgClass: "from-indigo-50/20",
      hoverBorder: "hover:border-indigo-200/80",
      textHover: "group-hover:text-indigo-600",
      btnClass: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
    {
      id: "mobile",
      delay: "600ms",
      theme: "pink",
      shadow: "rgba(244,63,94,0.06)",
      category: "Mobile Interface",
      title: "Mobile Apps",
      bgClass: "from-pink-50/20",
      hoverBorder: "hover:border-pink-200/80",
      textHover: "group-hover:text-pink-600",
      btnClass: "bg-pink-50 text-pink-600 border-pink-100",
    },
    {
      id: "design",
      delay: "700ms",
      theme: "emerald",
      shadow: "rgba(16,185,129,0.06)",
      category: "Visual Architecture",
      title: "UI/UX Design",
      bgClass: "from-emerald-50/20",
      hoverBorder: "hover:border-emerald-200/80",
      textHover: "group-hover:text-emerald-600",
      btnClass: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      id: "commerce",
      delay: "800ms",
      theme: "indigo",
      shadow: "rgba(79,70,229,0.06)",
      category: "Digital Trade",
      title: "E-commerce",
      bgClass: "from-indigo-50/20",
      hoverBorder: "hover:border-indigo-200/80",
      textHover: "group-hover:text-indigo-600",
      btnClass: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
  ];
</script>

<template>
  <section ref="containerRef" class="relative pt-36 pb-20 overflow-hidden perspective-1000">
    <!-- Background Hero Image with Parallax & Gradient Mask -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&q=80&w=2564"
        alt="Light Modern Background"
        :style="imageStyle"
        class="w-full h-full object-cover object-center opacity-20 transition-transform duration-75 ease-out"
        referrerPolicy="no-referrer"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-[#f8f9fa] via-[#f8f9fa]/70 to-transparent"
      />
    </div>

    <!-- Scroll-responsive shifting background overlay -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        :style="overlayStyle"
        class="absolute inset-[-15%] bg-[radial-gradient(circle_800px_at_50%_250px,rgba(99,102,241,0.06),transparent_80%)] transition-all duration-75 ease-out"
      />
      <!-- Subtle grid pattern shifting slightly differently -->
      <div
        :style="gridStyle"
        class="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-90 transition-transform duration-75 ease-out"
      />
    </div>

    <div
      class="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center text-center"
    >
      <!-- Animated Header Section with Parallax -->
      <div
        :style="textStyle"
        class="flex flex-col items-center transition-all duration-75 ease-out"
      >
        <!-- Pill Tag -->
        <div
          class="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium mb-8 shadow-sm transform transition-all duration-700 ease-out"
          :class="isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          style="transition-delay: 100ms"
        >
          {{ $t("hero-badge") }}
        </div>

        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-6xl transform transition-all duration-700 ease-out"
          :class="isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          style="transition-delay: 200ms"
        >
          <span class="whitespace-pre-wrap">{{ $t("slogan") }}</span>
        </h1>

        <p
          class="text-base md:text-lg text-slate-500 mb-10 max-w-2xl leading-relaxed transform transition-all duration-700 ease-out"
          :class="isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          style="transition-delay: 300ms"
        >
          {{ $t("sub-slogan") }}
        </p>

        <div
          class="flex flex-col sm:flex-row items-center gap-4 mb-12 transform transition-all duration-700 ease-out"
          :class="isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-0'"
          style="transition-delay: 400ms"
        >
          <UButton
            to="#services"
            color="neutral"
            variant="solid"
            size="xl"
            class="px-6 rounded-full shadow-md hover:shadow-lg w-full sm:w-auto justify-center font-medium"
          >
            {{ $t("learn-more") }}
          </UButton>
          <UButton
            to="#contact"
            color="neutral"
            variant="outline"
            size="xl"
            class="px-6 rounded-full bg-white text-slate-700 border-slate-200 hover:bg-slate-50 shadow-sm w-full sm:w-auto justify-center font-medium"
          >
            {{ $t("consult") }}
            <template #trailing>
              <UIcon name="i-lucide-chevron-right" />
            </template>
          </UButton>
        </div>
      </div>

      <div class="w-full relative px-4 md:px-0 mt-16 mb-24 z-20">
        <div
          class="absolute inset-0 bg-gradient-to-t from-[#f8f9fa] via-transparent to-transparent z-20 pointer-events-none"
        />

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 max-w-5xl mx-auto"
        >
          <HeroCard v-for="card in cards" :key="card.id" :card="card" :is-mounted="isMounted" />
        </div>
      </div>
    </div>
  </section>
</template>
