<script setup>
  import { ref } from "vue";

  const emailAddress = "hello@bitaska.my.id";
  const isCopied = ref(false);

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(emailAddress);
      isCopied.value = true;
      setTimeout(() => {
        isCopied.value = false;
      }, 2000);
    }
  };

  // Prefilled message for direct WhatsApp
  const whatsappLink =
    "https://wa.me/6285128031998?text=Halo%20Bitaska%2C%20saya%20tertarik%20untuk%20berkolaborasi%20membangun%20proyek%20saya.%20Mari%20diskusikan%20bersama!";
</script>

<template>
  <section
    id="contact"
    class="py-24 relative overflow-hidden bg-gradient-to-b from-white to-slate-50"
  >
    <!-- Ambient backgrounds -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-50/60 rounded-full blur-3xl opacity-80"
      />
      <div
        class="absolute bottom-0 right-[10%] w-72 h-72 bg-pink-50/40 rounded-full blur-2xl opacity-60"
      />
    </div>

    <div class="max-w-4xl mx-auto px-6 relative z-10 text-center">
      <!-- Styled Micro Badge -->
      <div
        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/5 text-slate-800 border border-slate-900/10 text-xs font-semibold tracking-wide uppercase mb-8"
      >
        <UIcon name="i-lucide:sparkles" class="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
        Let's Work Together
      </div>

      <!-- Main Headline -->
      <h2
        class="text-4xl md:text-6xl font-display font-medium tracking-tight text-slate-900 mb-6 leading-tight max-w-2xl mx-auto"
      >
        {{ $t("cta.title") }}
      </h2>

      <p
        class="text-base md:text-lg text-slate-500 max-w-xl mx-auto mb-12 leading-relaxed font-sans"
      >
        {{ $t("cta.subtitle") }}
      </p>

      <!-- Unique Centered Interactive Card -->
      <div
        class="bg-slate-950 text-white rounded-3xl border border-slate-800/80 p-8 md:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.15)] relative overflow-hidden group max-w-2xl mx-auto"
      >
        <!-- Interactive background visual grid effect -->
        <div
          class="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]"
        />

        <div class="relative z-10 space-y-8">
          <!-- Call To Actions Grouped Straightforwardly -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
            <!-- Main WhatsApp Button -->
            <a
              :href="whatsappLink"
              target="_blank"
              rel="noreferrer"
              class="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-white text-slate-950 hover:bg-slate-50 active:scale-[0.98] transition-all shadow-lg hover:shadow-white/10 text-sm select-none cursor-pointer border border-transparent"
            >
              <UIcon name="i-lucide:message-square" class="w-4 h-4 fill-slate-950 text-slate-950" />
              Get a Free Consultation
              <UIcon name="i-lucide:arrow-right" class="w-4 h-4 text-slate-500" />
            </a>

            <!-- Styled Email Button -->
            <button
              class="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-xs font-semibold border border-slate-800/80 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900 text-slate-300 transition-all cursor-pointer active:scale-[0.98] select-none"
              @click="copyEmail"
            >
              <UIcon
                :name="isCopied ? 'i-lucide:check' : 'i-lucide:copy'"
                class="w-4 h-4 text-slate-400"
                :class="isCopied ? 'text-emerald-400' : ''"
              />
              <span>{{ isCopied ? "Copied!" : "Copy Our Email" }}</span>
            </button>
          </div>

          <!-- Quick Trust details badge inside the card -->
          <div
            class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-6 border-t border-slate-900 text-xs text-slate-400"
          >
            <span class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              Free Consultation
            </span>
            <span class="hidden sm:inline text-slate-700">•</span>
            <span class="flex items-center gap-1.5">
              <UIcon name="i-lucide:zap" class="w-3.5 h-3.5 text-indigo-400" />
              Quick Proposal Turnaround
            </span>
            <span class="hidden sm:inline text-slate-700">•</span>
            <span class="flex items-center gap-1.5">
              <UIcon name="i-lucide:mail" class="w-3.5 h-3.5 text-pink-400" />
              Responsive & Flexible
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  /* Standard high finish minimalist styles */
</style>
