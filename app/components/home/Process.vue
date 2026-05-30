<script setup>
  import { ref, onMounted, onUnmounted, computed } from "vue";
  const { t } = useI18n();

  const colorMap = {
    indigo: {
      bgLight: "bg-indigo-400",
      badge: "bg-indigo-950 text-indigo-300 border border-indigo-900/50",
      indicator: "bg-indigo-500",
      iconBg: "bg-indigo-50 border-indigo-100 text-indigo-600",
      stepBadge: "bg-indigo-900/5 text-indigo-700",
    },
    pink: {
      bgLight: "bg-pink-400",
      badge: "bg-pink-950 text-pink-300 border border-pink-900/50",
      indicator: "bg-pink-500",
      iconBg: "bg-pink-50 border-pink-100 text-pink-600",
      stepBadge: "bg-pink-900/5 text-pink-700",
    },
    emerald: {
      bgLight: "bg-emerald-400",
      badge: "bg-emerald-950 text-emerald-300 border border-emerald-900/50",
      indicator: "bg-emerald-500",
      iconBg: "bg-emerald-50 border-emerald-100 text-emerald-600",
      stepBadge: "bg-emerald-900/5 text-emerald-700",
    },
    sky: {
      bgLight: "bg-sky-400",
      badge: "bg-sky-950 text-sky-300 border border-sky-900/50",
      indicator: "bg-sky-500",
      iconBg: "bg-sky-50 border-sky-100 text-sky-600",
      stepBadge: "bg-sky-900/5 text-sky-700",
    },
    violet: {
      bgLight: "bg-violet-400",
      badge: "bg-violet-950 text-violet-300 border border-violet-900/50",
      indicator: "bg-violet-500",
      iconBg: "bg-violet-50 border-violet-100 text-violet-600",
      stepBadge: "bg-violet-900/5 text-violet-700",
    },
    amber: {
      bgLight: "bg-amber-400",
      badge: "bg-amber-950 text-amber-300 border border-amber-900/50",
      indicator: "bg-amber-500",
      iconBg: "bg-amber-50 border-amber-100 text-amber-600",
      stepBadge: "bg-amber-900/5 text-amber-700",
    },
  };

  const steps = [
    {
      num: "01",
      title: "Discovery & Requirements",
      description: computed(() => $t("process-step.discover")),
      icon: "i-lucide:search",
      color: "indigo",
      badge: "Fase Investigasi",
      showcase: {
        title: "Dokumen Spesifikasi & Analisis",
        type: "checklist",
        items: [
          { label: "Analisis Kompetitor & Market Research", done: true },
          { label: "Penyusunan User Flow & Sitemap", done: true },
          { label: "Spesifikasi Teknis & Skalabilitas", done: true },
          { label: "Estimasi Timeline & Prioritas Fitur", done: false },
        ],
      },
    },
    {
      num: "02",
      title: "Design & Prototyping",
      description: computed(() => $t("process-step.design")),
      icon: "i-lucide:pen",
      color: "pink",
      badge: "Riset Desain",
      showcase: {
        title: "Figma Interactive Prototyping",
        type: "palette",
        bgColor: "#0F172A",
        accentColor: "#EC4899",
        radius: "16px",
      },
    },
    {
      num: "03",
      title: "Modern Development",
      description: computed(() => $t("process-step.development")),
      icon: "i-lucide:code",
      color: "emerald",
      badge: "Proses Coding",
      showcase: {
        title: "Sorce Code Editor (Nuxt 3 / ESM)",
        type: "code",
        code: `// server/api/project.ts
                export default defineEventHandler(async (event) => {
                  const config = useRuntimeConfig()
                  const db = await useDatabase()

                  // Ambil data proyek & optimasi cache
                  const projects = await db.query(
                    "SELECT * FROM projects WHERE active = 1"
                  )

                  return {
                    status: 200,
                    performance: 'optimized',
                    data: projects
                  }
                })`,
      },
    },
    {
      num: "04",
      title: "Testing & QA",
      description: computed(() => $t("process-step.testing")),
      icon: "i-lucide:check-circle",
      color: "sky",
      badge: "Pemeriksaan Mutu",
      showcase: {
        title: "Nuxt Quality Assurance Lab",
        type: "tests",
        list: [
          { name: "E2E Testing (Playwright)", status: "passed" },
          { name: "Unit Tests (Vitest)", status: "passed" },
          { name: "Lighthouse Performance Core Web vitals", status: "optimal" },
          { name: "Security Audit (OWASP TOP 10)", status: "secure" },
        ],
      },
    },
    {
      num: "05",
      title: "Smooth Deployment",
      description: computed(() => $t("process-step.launch")),
      icon: "i-lucide:rocket",
      color: "violet",
      badge: "Meluncur ke Cloud",
      showcase: {
        title: "Cloud Run Engine Build",
        type: "terminal",
        lines: [
          "✔ Resolving environment configuration files",
          "✔ Building application binaries successfully",
          "✔ Creating Serverless Container Image on Cloud Run",
          "✔ Initializing SSL certificate for client domains",
          "⚡ Deployment finished. Live on production!",
        ],
        uptime: "99.99%",
        server: "Edge Serverless",
      },
    },
    {
      num: "06",
      title: "Maintenance & Scaling",
      description: computed(() => $t("process-step.maintenance")),
      icon: "i-lucide:wrench",
      color: "amber",
      badge: "Dukungan Terus Menerus",
      showcase: {
        title: "Dashboard Pemantauan Aktif",
        type: "support",
        uptime: "99.98%",
        latency: "24ms",
        status: "Aktif",
        backups: "Terjadwal",
      },
    },
  ];

  const containerRef = ref(null);
  const scrollProgress = ref(0);
  const isVisible = ref(false);
  const activeStepIndex = ref(0);

  const activeStep = computed(() => steps[activeStepIndex.value]);

  const handleScroll = () => {
    if (!containerRef.value) return;
    const rect = containerRef.value.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const totalDist = viewportHeight + rect.height;
    const currentDist = viewportHeight - rect.top;
    const progress = Math.min(Math.max(currentDist / totalDist, 0), 1);
    scrollProgress.value = progress;
  };

  const decorY = computed(() => {
    return -150 + scrollProgress.value * 300;
  });

  const handleStepClick = (index) => {
    activeStepIndex.value = index;
  };

  // Interactive variables for showcase 01 checklist
  const currentChecklist = ref([
    { label: "Analisis Kompetitor & Market Research", done: true },
    { label: "Penyusunan User Flow & Sitemap", done: true },
    { label: "Spesifikasi Teknis & Skalabilitas", done: true },
    { label: "Estimasi Anggaran & Timeline Prioritas", done: false },
  ]);
  const toggleChecklist = (idx) => {
    currentChecklist.value[idx].done = !currentChecklist.value[idx].done;
  };
  const checklistProgress = computed(() => {
    const finished = currentChecklist.value.filter((i) => i.done).length;
    return Math.round((finished / currentChecklist.value.length) * 100);
  });

  // Interactive variables for showcase 02 (Figma mimic)
  const figmaAccentColor = ref("#10B981");
  const figmaRadius = ref("24px");
  const figmaTheme = ref("dark");

  // Interactive variables for showcase 04 (Tests)
  const isTestingRunning = ref(false);
  const testProgress = ref(100);
  const runTests = () => {
    if (isTestingRunning.value) return;
    isTestingRunning.value = true;
    testProgress.value = 0;
    const interval = setInterval(() => {
      testProgress.value += 10;
      if (testProgress.value >= 100) {
        clearInterval(interval);
        isTestingRunning.value = false;
      }
    }, 150);
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
            observer.disconnect();
          }
        });
      },
      { rootMargin: "-50px" },
    );

    if (containerRef.value) {
      observer.observe(containerRef.value);
    }
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>

<template>
  <section
    id="process"
    ref="containerRef"
    class="py-24 relative overflow-visible bg-gradient-to-b from-white via-slate-50/60 to-white"
  >
    <!-- Sophisticated Subtle Background Patterns -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div
        :style="{ transform: `translate3d(0, ${decorY}px, 0)` }"
        class="absolute right-[-10%] top-1/4 text-[24rem] font-bold text-slate-100/70 tracking-tighter pointer-events-none select-none z-0 transition-transform duration-100 ease-out font-display"
      >
        WORKFLOW
      </div>
      <!-- Soft ambient radial glows -->
      <div
        class="absolute top-1/3 left-10 w-160 h-160 bg-indigo-50/40 rounded-full blur-3xl opacity-70"
      />
      <div
        class="absolute bottom-1/4 right-10 w-160 h-160 bg-pink-50/30 rounded-full blur-3xl opacity-60"
      />
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <!-- Section Header -->
      <div class="mb-20 text-center max-w-3xl mx-auto">
        <div
          class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/5 text-slate-900 border border-slate-900/10 text-xs font-semibold tracking-wide uppercase mb-4 shadow-[0_2px_10px_rgba(0,0,0,0.01)] backdrop-blur-md"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-slate-900 animate-pulse" />
          {{ $t("process-badge") }}
        </div>
        <h2
          class="text-3xl md:text-5xl font-display font-medium tracking-tight text-slate-900 mb-6 leading-tight"
        >
          {{ $t("process") }}
        </h2>
        <p class="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          {{ $t("process-sub-title") }}
        </p>
      </div>

      <!-- Layout Split: Left (Interactive Showcase Monitor), Right (Beautiful Steps Timeline) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <!-- LEFT COLUMN: Sticky Interactive Showcase Board. Replaces typical dry screens with a dynamic simulation panel -->
        <div class="lg:col-span-5 lg:sticky lg:top-28 z-20">
          <div class="relative group">
            <!-- Extra floating design hint -->
            <div
              class="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-3.5 py-1.5 rounded-2xl bg-slate-950 text-white border border-slate-800 text-[11px] font-mono tracking-wider uppercase z-30 shadow-xl flex items-center gap-1.5 animate-bounce"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Live Sandbox
              <MousePointerClick class="w-3 h-3 text-indigo-300" />
            </div>

            <!-- Outer glow box which morphs color based on step -->
            <div
              class="absolute inset-0 rounded-[2.5rem] opacity-30 blur-2xl transition-all duration-700 pointer-events-none scale-105"
              :class="colorMap[activeStep.color].bgLight"
            />

            <!-- Dashboard Frame -->
            <div
              class="relative bg-slate-950 border border-slate-800 rounded-[2.25rem] shadow-[0_30px_70px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-500"
            >
              <!-- Window Top Bar -->
              <div
                class="px-6 py-4 border-b border-slate-900 flex items-center justify-between bg-slate-950"
              >
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div
                  class="px-3 py-0.5 rounded-md bg-slate-900/60 border border-slate-800 text-[10px] font-mono text-slate-400 flex items-center gap-1.5"
                >
                  <span class="w-1 h-1 rounded-full bg-emerald-400 inline-block" />
                  bitaska labs workflow
                </div>
                <div class="w-6" />
              </div>

              <!-- Main Dynamic Content of Showcase -->
              <div class="p-8 min-h-[360px] flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-3 mb-6">
                    <span
                      class="text-xs px-2.5 py-1 rounded bg-slate-905 border border-slate-800 font-mono text-slate-400 tracking-wider"
                    >
                      TAHAP {{ activeStep.num }}
                    </span>
                    <span
                      class="text-xs font-semibold px-2.5 py-1 rounded-full transition-colors"
                      :class="colorMap[activeStep.color].badge"
                    >
                      {{ activeStep.badge }}
                    </span>
                  </div>
                  <h4 class="text-xl font-display font-medium text-white mb-2 leading-tight">
                    {{ activeStep.showcase.title }}
                  </h4>
                  <p class="text-xs text-slate-400 mb-6 leading-relaxed">
                    Sistem sandbox interaktif untuk melihat demonstrasi riil dari hasil keluaran
                    kerja kami.
                  </p>
                </div>

                <!-- DYNAMIC CORE PANEL: checklist -->
                <div
                  v-if="activeStep.showcase.type === 'checklist'"
                  class="space-y-4 my-auto bg-slate-900/40 p-4 rounded-2xl border border-slate-900"
                >
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-mono text-slate-400">Pencapaian Milestone</span>
                    <span class="text-xs font-mono font-bold text-indigo-400">
                      {{ checklistProgress }}%</span
                    >
                  </div>
                  <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      class="h-full bg-indigo-500 rounded-full transition-all duration-500"
                      :style="{ width: `${checklistProgress}%` }"
                    />
                  </div>
                  <div class="space-y-2.5 pt-2">
                    <div
                      v-for="(item, idx) in currentChecklist"
                      :key="item.label"
                      @click="toggleChecklist(idx)"
                      class="flex items-center gap-3 p-2 rounded-xl border transition-all cursor-pointer bg-slate-950/40 hover:bg-slate-900"
                      :class="
                        item.done
                          ? 'border-indigo-500/20 text-white'
                          : 'border-slate-800 text-slate-500'
                      "
                    >
                      <div
                        class="w-4 h-4 rounded flex items-center justify-center transition-all border"
                        :class="
                          item.done ? 'bg-indigo-500/20 border-indigo-400' : 'border-slate-700'
                        "
                      >
                        <Check v-if="item.done" class="w-3 h-3 text-indigo-400 font-bold" />
                      </div>
                      <span class="text-xs font-medium tracking-wide leading-none select-none">{{
                        item.label
                      }}</span>
                    </div>
                  </div>
                </div>

                <!-- DYNAMIC CORE PANEL: palette / figma interactive mimic -->
                <div v-else-if="activeStep.showcase.type === 'palette'" class="space-y-6 my-auto">
                  <div class="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-4">
                    <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span class="text-xs font-mono text-slate-400">
                        Komponen UI (Mockup Figma)
                      </span>
                      <div class="flex gap-1.5">
                        <span
                          @click="figmaTheme = 'dark'"
                          :class="
                            figmaTheme === 'dark'
                              ? 'bg-indigo-500 text-white'
                              : 'bg-slate-800 text-slate-400'
                          "
                          class="px-2 py-0.5 rounded text-[10px] cursor-pointer font-mono select-none"
                        >
                          DARK
                        </span>
                        <span
                          @click="figmaTheme = 'light'"
                          :class="
                            figmaTheme === 'light'
                              ? 'bg-indigo-500 text-white'
                              : 'bg-slate-800 text-slate-400'
                          "
                          class="px-2 py-0.5 rounded text-[10px] cursor-pointer font-mono select-none"
                        >
                          LIGHT
                        </span>
                      </div>
                    </div>

                    <!-- Sandbox button with dynamic style bindings -->
                    <div
                      class="flex items-center justify-center py-6 rounded-xl transition-all duration-300"
                      :class="
                        figmaTheme === 'dark'
                          ? 'bg-slate-950'
                          : 'bg-slate-50 border border-slate-200'
                      "
                    >
                      <button
                        :style="{
                          borderRadius: figmaRadius,
                          backgroundColor: figmaAccentColor,
                        }"
                        class="px-6 py-2.5 text-xs font-semibold text-white shadow-lg active:scale-95 transition-all duration-200 flex items-center gap-1.5"
                      >
                        Tombol Kustom Desain
                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      </button>
                    </div>

                    <!-- Customizer controls -->
                    <div class="grid grid-cols-2 gap-3 pt-2">
                      <div class="space-y-1">
                        <label class="text-[10px] font-mono text-slate-400 tracking-wider">
                          Aksen Pendukung
                        </label>
                        <div class="flex gap-2">
                          <span
                            @click="figmaAccentColor = '#EC4899'"
                            class="w-5 h-5 rounded-full bg-pink-500 cursor-pointer border border-white/20 transition-transform hover:scale-110"
                            :class="{ 'ring-2 ring-white': figmaAccentColor === '#EC4899' }"
                          />
                          <span
                            @click="figmaAccentColor = '#10B981'"
                            class="w-5 h-5 rounded-full bg-emerald-500 cursor-pointer border border-white/20 transition-transform hover:scale-110"
                            :class="{ 'ring-2 ring-white': figmaAccentColor === '#10B981' }"
                          />
                          <span
                            @click="figmaAccentColor = '#6366F1'"
                            class="w-5 h-5 rounded-full bg-indigo-500 cursor-pointer border border-white/20 transition-transform hover:scale-110"
                            :class="{ 'ring-2 ring-white': figmaAccentColor === '#6366F1' }"
                          />
                        </div>
                      </div>
                      <div class="space-y-1">
                        <label class="text-[10px] font-mono text-slate-400 tracking-wider">
                          Sudut (Border Radius)
                        </label>
                        <div class="flex gap-1.5">
                          <span
                            @click="figmaRadius = '4px'"
                            class="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-white cursor-pointer select-none font-mono"
                            :class="{ 'bg-pink-500': figmaRadius === '4px' }"
                          >
                            4px
                          </span>
                          <span
                            @click="figmaRadius = '12px'"
                            class="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-white cursor-pointer select-none font-mono"
                            :class="{ 'bg-pink-500': figmaRadius === '12px' }"
                          >
                            12px
                          </span>
                          <span
                            @click="figmaRadius = '9999px'"
                            class="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-white cursor-pointer select-none font-mono"
                            :class="{ 'bg-pink-500': figmaRadius === '9999px' }"
                          >
                            Caps
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- DYNAMIC CORE PANEL: code -->
                <div v-else-if="activeStep.showcase.type === 'code'" class="my-auto">
                  <div
                    class="rounded-xl border border-slate-900 bg-slate-900/60 p-4 font-mono text-xs overflow-x-auto text-emerald-400 space-y-1 select-none"
                  >
                    <div
                      class="text-[10px] text-slate-500 uppercase tracking-widest border-b border-slate-900 pb-2 mb-2 flex items-center justify-between"
                    >
                      <span>ES MODULES OUTPUT</span>
                      <span
                        class="text-[8px] px-1 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      >
                        READY
                      </span>
                    </div>
                    <pre
                      class="whitespace-pre-wrap leading-relaxed text-slate-300 text-[11px]"
                    ><code class="text-emerald-400">{{ activeStep.showcase.code }}</code></pre>
                  </div>
                </div>

                <!-- DYNAMIC CORE PANEL: tests -->
                <div v-else-if="activeStep.showcase.type === 'tests'" class="space-y-4 my-auto">
                  <div class="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-mono text-slate-300">Hasil Audit Mutu</span>
                      <button
                        @click="runTests"
                        class="px-2.5 py-1 text-[10px] font-medium text-slate-900 bg-white hover:bg-slate-100 rounded transition-colors flex items-center gap-1 cursor-pointer select-none font-sans"
                        :disabled="isTestingRunning"
                      >
                        <Play class="w-2.5 h-2.5" />
                        {{ isTestingRunning ? "Menjalankan..." : "Uji Ulang" }}
                      </button>
                    </div>

                    <!-- Progress bar -->
                    <div class="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                      <div
                        class="bg-gradient-to-r from-teal-400 to-sky-400 h-full rounded-full transition-all duration-300"
                        :style="{ width: `${testProgress}%` }"
                      />
                    </div>

                    <div class="space-y-2 text-xs pt-1">
                      <div
                        v-for="t in activeStep.showcase.list"
                        :key="t.name"
                        class="flex items-center justify-between py-1 border-b border-slate-900/50 last:border-0"
                      >
                        <span class="text-slate-400 font-mono text-[11px]">{{ t.name }}</span>
                        <!-- Status indicator -->
                        <div class="flex items-center gap-1.5">
                          <span
                            v-if="isTestingRunning"
                            class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"
                          />
                          <span
                            class="text-[10px] font-mono px-1.5 py-0.5 rounded"
                            :class="{
                              'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20':
                                !isTestingRunning,
                              'bg-slate-800 text-slate-400': isTestingRunning,
                            }"
                          >
                            {{ isTestingRunning ? "RUNNING" : "PASSED" }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- DYNAMIC CORE PANEL: terminal -->
                <div v-else-if="activeStep.showcase.type === 'terminal'" class="my-auto">
                  <div
                    class="rounded-xl border border-slate-900 bg-slate-900/80 p-5 font-mono text-[10.5px] text-slate-300 space-y-1.5 shadow-inner"
                  >
                    <div
                      class="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-900 mb-2"
                    >
                      <span class="flex items-center gap-1">
                        <Terminal class="w-3 h-3" /> DEPLOYMENT LOGS
                      </span>
                      <span class="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                    </div>
                    <div
                      v-for="(line, i) in activeStep.showcase.lines"
                      :key="i"
                      class="leading-relaxed"
                    >
                      <span class="text-slate-500">[$]</span>
                      <span class="text-slate-300">{{ line }}</span>
                    </div>
                    <div
                      class="pt-3 flex gap-3 text-[10px] border-t border-slate-900 mt-2 text-slate-400"
                    >
                      <span>
                        Server:
                        <strong class="text-indigo-400">{{
                          activeStep.showcase.server
                        }}</strong></span
                      >
                      <span>
                        Uptime:
                        <strong class="text-emerald-400">{{
                          activeStep.showcase.uptime
                        }}</strong></span
                      >
                    </div>
                  </div>
                </div>

                <!-- DYNAMIC CORE PANEL: support -->
                <div v-else-if="activeStep.showcase.type === 'support'" class="space-y-4 my-auto">
                  <div class="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-4">
                    <div class="flex items-center justify-between border-b border-slate-900 pb-2">
                      <span class="text-xs font-mono text-slate-300">
                        Live Server Health Telemetry
                      </span>
                      <span class="flex items-center gap-1.5">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span
                          class="text-[9px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20"
                        >
                          LIVE ACTIVE
                        </span>
                      </span>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                      <div
                        class="bg-slate-950 p-3 rounded-xl border border-slate-900/80 space-y-1 text-center"
                      >
                        <span class="text-[10px] font-mono text-slate-500 block uppercase">
                          Server Latency
                        </span>
                        <span class="text-base font-bold text-white font-mono tracking-tight">{{
                          activeStep.showcase.latency
                        }}</span>
                      </div>
                      <div
                        class="bg-slate-950 p-3 rounded-xl border border-slate-900/80 space-y-1 text-center"
                      >
                        <span class="text-[10px] font-mono text-slate-500 block uppercase">
                          Daily Backups
                        </span>
                        <span class="text-base font-bold text-emerald-400 font-mono tracking-tight">
                          {{ activeStep.showcase.backups }}
                        </span>
                      </div>
                    </div>

                    <div class="flex items-center justify-between text-xs pt-1 px-1">
                      <span class="text-slate-400 font-sans">Garansi Uptime</span>
                      <span class="font-mono text-white font-bold">
                        {{ activeStep.showcase.uptime }}
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Footer details of showcase -->
                <div
                  class="pt-6 border-t border-slate-900/60 flex items-center justify-between text-xs text-slate-500"
                >
                  <span class="font-mono">UTOMOSOLUTIONS // SYSTEM</span>
                  <span class="flex items-center gap-1">
                    <span class="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    Buka Interaktif
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN: Elegant vertical flow steps -->
        <div class="lg:col-span-7 space-y-5">
          <div
            v-for="(step, index) in steps"
            :key="step.num"
            @mouseenter="activeStepIndex = index"
            @click="handleStepClick(index)"
            class="relative rounded-[2rem] border transition-all duration-300 transform group/step cursor-pointer text-left overflow-hidden"
            :class="[
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95',
              activeStepIndex === index
                ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] scale-[1.01] border-slate-200 z-10'
                : 'bg-transparent border-slate-100 hover:border-slate-200 hover:bg-white/40',
            ]"
            :style="{ transitionDelay: `${index * 80}ms` }"
          >
            <!-- Sleek active left indicator bar matching step's specific color theme -->
            <div
              class="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-350"
              :class="[
                colorMap[step.color].indicator,
                activeStepIndex === index ? 'opacity-100' : 'opacity-0 group-hover/step:opacity-50',
              ]"
            />

            <!-- Card layout -->
            <div class="p-6 sm:p-8 flex items-start gap-4 sm:gap-6">
              <!-- Icon Frame -->
              <div
                class="w-12 h-12 flex-shrink-0 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm border"
                :class="
                  activeStepIndex === index
                    ? colorMap[step.color].iconBg
                    : 'bg-slate-100/80 border-slate-200 text-slate-500 group-hover/step:bg-slate-100'
                "
              >
                <UIcon
                  :name="step.icon"
                  class="w-5 h-5 transition-transform duration-300"
                  :class="activeStepIndex === index ? 'scale-110' : ''"
                />
              </div>

              <!-- Content panel -->
              <div class="grow space-y-1.5">
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <div class="flex items-center gap-2">
                    <span
                      class="text-xs font-semibold px-2 py-0.5 rounded-full"
                      :class="
                        activeStepIndex === index
                          ? colorMap[step.color].stepBadge
                          : 'bg-slate-100 text-slate-500'
                      "
                    >
                      Tahap {{ step.num }}
                    </span>
                    <span
                      class="text-xs text-slate-400 tracking-wide font-sans group-hover/step:text-slate-500 transition-colors"
                    >
                      {{ step.badge }}
                    </span>
                  </div>

                  <!-- Subtle check status on active items design hint -->
                  <span
                    class="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-300 transition-colors"
                    :class="activeStepIndex === index ? 'text-slate-500' : ''"
                  >
                    {{ activeStepIndex === index ? "Dipilih" : "Sentuh detail" }}
                  </span>
                </div>

                <h3
                  class="text-lg font-display font-medium text-slate-900 tracking-tight transition-colors"
                  :class="
                    activeStepIndex === index ? 'text-indigo-950 font-semibold' : 'text-slate-800'
                  "
                >
                  {{ step.title }}
                </h3>

                <p
                  class="text-sm cursor-text leading-relaxed font-sans transition-colors"
                  :class="activeStepIndex === index ? 'text-slate-600' : 'text-slate-500'"
                >
                  {{ step.description }}
                </p>

                <!-- Nested compact checklist display shown only on mobile when view is current active tab -->
                <div
                  v-if="activeStepIndex === index"
                  class="mt-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-2 lg:hidden"
                >
                  <p
                    class="text-xs font-bold text-slate-700 tracking-wide uppercase flex items-center gap-1.5 mb-2"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-slate-900 inline-block" />
                    {{ step.showcase.title }}
                  </p>

                  <div v-if="step.showcase.type === 'checklist'" class="space-y-1.5">
                    <div
                      v-for="item in currentChecklist"
                      :key="item.label"
                      class="flex items-center gap-2 text-xs text-slate-600"
                    >
                      <div
                        class="w-3.5 h-3.5 rounded flex items-center justify-center border"
                        :class="item.done ? 'bg-indigo-50 border-indigo-300' : 'border-slate-300'"
                      >
                        <Check v-if="item.done" class="w-2.5 h-2.5 text-indigo-600" />
                      </div>
                      <span>{{ item.label }}</span>
                    </div>
                  </div>

                  <div v-else class="text-xs text-slate-500 leading-relaxed italic">
                    Lihat visual demonstrasi riil dari fase ini pada panel sandbox interaktif kami.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  /* Disable user translation shifts if not needed, smooth transition curves built in with dynamic tailwind classes */
</style>
