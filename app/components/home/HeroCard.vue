<script setup>
defineProps({
  card: {
    type: Object,
    required: true,
  },
  isMounted: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="bg-white rounded-3xl p-6 shadow-[0_20px_40px_rgba(0,0,0,0.012)] border border-slate-100 aspect-square flex flex-col justify-between relative overflow-hidden group transform transition-all duration-700 ease-out cursor-pointer hover:-translate-y-1"
    :class="[
      isMounted
        ? 'opacity-100 translate-y-0 scale-100'
        : 'opacity-0 translate-y-8 scale-95',
      card.hoverBorder,
    ]"
    :style="{
      transitionDelay: card.delay,
      '--tw-shadow': `0 30px 60px ${card.shadow}`,
      '--tw-shadow-colored': `0 30px 60px var(--tw-shadow-color)`,
    }"
    @mouseenter="
      $event.currentTarget.style.boxShadow = `var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)`
    "
    @mouseleave="$event.currentTarget.style.boxShadow = ''"
  >
    <!-- Background mesh -->
    <div
      class="absolute inset-x-0 top-0 h-24 bg-gradient-to-b to-transparent pointer-events-none"
      :class="card.bgClass"
    />

    <!-- Card 1: Web Dev -->
    <div
      v-if="card.id === 'web'"
      class="relative z-10 w-full h-32 rounded-xl bg-slate-950 border border-slate-800 p-2.5 flex flex-col transition-all duration-300 group-hover:scale-[1.03]"
    >
      <div
        class="flex items-center gap-1.5 mb-2 bg-slate-900 border-b border-slate-800 pb-1.5 -mx-1 -mt-1 px-2.5 rounded-t-lg"
      >
        <div class="flex gap-1">
          <span class="w-1.5 h-1.5 rounded-full bg-rose-500/80 animate-pulse" />
          <span class="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
        </div>
        <div
          class="flex-grow mx-2 bg-slate-950 rounded border border-slate-800 text-[8px] text-slate-500 font-mono py-0.5 px-2 truncate flex items-center gap-1"
        >
          <span class="text-indigo-400 font-bold">https://</span>utomo.id/demo
        </div>
      </div>

      <div
        class="flex-grow flex gap-2 overflow-hidden text-[8px] font-mono leading-normal pt-1 text-slate-400"
      >
        <div class="w-1/2 flex flex-col gap-1.5 border-r border-slate-800 pr-1.5">
          <div class="flex items-center gap-1">
            <span class="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
            <span class="text-[7px] text-slate-500 uppercase">State</span>
          </div>
          <div
            class="bg-indigo-950/40 text-[7px] text-indigo-300 px-1 py-0.5 rounded border border-indigo-900/60 font-semibold truncate animate-pulse"
          >
            v-model="nuxt"
          </div>
          <span class="text-slate-600 block text-[6px]">const dev = ref(true)</span>
        </div>
        <div class="w-1/2 flex flex-col justify-center items-center text-center">
          <div
            class="w-10 h-10 rounded-full border-2 border-emerald-500 flex flex-col items-center justify-center bg-emerald-500/10 text-emerald-400 animate-pulse"
          >
            <span class="text-[9px] font-bold leading-none">100</span>
            <span class="text-[5px] text-emerald-500 tracking-tighter uppercase font-medium"
              >Speed</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Card 2: Mobile Apps -->
    <div
      v-else-if="card.id === 'mobile'"
      class="relative z-10 w-full h-32 flex justify-center items-center transition-all duration-300 group-hover:scale-[1.03]"
    >
      <div
        class="absolute w-20 h-28 rounded-xl bg-slate-50 border border-slate-100 shadow-[0_5px_15px_rgba(0,0,0,0.01)] -rotate-6 -translate-x-4 opacity-70 group-hover:-translate-x-6 group-hover:rotate-[-8deg] transition-all duration-300"
      />
      <div
        class="relative w-24 h-28 bg-slate-950 border border-slate-800 rounded-xl shadow-lg p-2 flex flex-col justify-between overflow-hidden"
      >
        <div
          class="flex items-center justify-between text-[6px] text-slate-500 font-mono border-b border-slate-900 pb-1"
        >
          <span>08:12</span>
          <div class="flex items-center gap-0.5">
            <span class="w-1 h-1 bg-emerald-500 rounded-full" />
            <span>5G</span>
          </div>
        </div>
        <div class="flex-grow flex flex-col justify-center gap-1.5 my-1.5">
          <div
            class="bg-gradient-to-r from-pink-500 to-rose-400 h-5 rounded p-1 flex items-center justify-between"
          >
            <span class="text-[6px] text-white font-medium uppercase font-sans"
              >Active Session</span
            >
            <UIcon
              name="i-lucide-smartphone"
              class="w-2 mb-0.5 text-white animate-bounce"
            />
          </div>
          <div
            class="flex items-center justify-between gap-0.5 bg-slate-900/60 p-1 rounded border border-slate-800"
          >
            <span class="text-[5px] text-slate-400 font-mono">App Running</span>
            <div class="flex gap-0.5 items-end h-2">
              <span class="w-0.5 h-1 bg-pink-500 rounded-full animate-pulse" />
              <span class="w-0.5 h-2 bg-pink-400 rounded-full animate-bounce" />
              <span class="w-0.5 h-1.5 bg-pink-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
        <div class="w-8 h-0.5 bg-slate-800 rounded-full mx-auto" />
      </div>
    </div>

    <!-- Card 3: UI/UX Design -->
    <div
      v-else-if="card.id === 'design'"
      class="relative z-10 w-full h-32 rounded-xl bg-slate-50 border border-slate-200 border-dashed p-3 overflow-hidden flex flex-col justify-center items-center transition-all duration-300 group-hover:scale-[1.03]"
    >
      <div
        class="relative w-28 h-16 border-2 border-emerald-500 rounded bg-white flex flex-col items-center justify-center p-2 shadow-sm"
      >
        <span
          class="absolute -top-1 -left-1 w-2 h-2 bg-emerald-500 border border-white rounded-full"
        />
        <span
          class="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 border border-white rounded-full"
        />
        <span
          class="absolute -bottom-1 -left-1 w-2 h-2 bg-emerald-500 border border-white rounded-full"
        />
        <span
          class="absolute -bottom-1 -right-1 w-2 h-2 bg-emerald-500 border border-white rounded-full animate-ping"
        />
        <div class="text-[10px] font-medium font-sans text-slate-800 leading-tight">
          Design System
        </div>
        <div class="text-[7px] text-slate-400 font-mono mt-0.5">W: 112px H: 64px</div>
      </div>
      <div
        class="absolute top-1/2 left-2/3 transform translate-x-[-10px] translate-y-[10px] flex items-center gap-1 transition-all duration-500 group-hover:-translate-x-4 group-hover:-translate-y-2"
      >
        <svg
          class="w-3.5 h-3.5 text-emerald-500 drop-shadow"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M4.5 3v13.064l3.657-3.657 3.327 7.593 2.743-1.2-3.356-7.657h5.129L4.5 3z"
          />
        </svg>
        <span
          class="bg-emerald-500 text-white font-mono text-[7px] tracking-wide px-1.5 py-0.5 rounded shadow-sm font-semibold select-none"
        >
          Soni (UI)
        </span>
      </div>
    </div>

    <!-- Card 4: E-commerce -->
    <div
      v-else-if="card.id === 'commerce'"
      class="relative z-10 w-full h-32 rounded-xl bg-slate-50 border border-slate-100 p-2.5 flex flex-col justify-between transition-all duration-300 group-hover:scale-[1.03]"
    >
      <div
        class="flex items-center justify-between text-[7px] text-slate-500 font-mono pb-1 border-b border-slate-200/60"
      >
        <span class="font-bold">E-COMMERCE DEMO</span>
        <span
          class="text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-1 py-0.2 rounded"
          >SECURE</span
        >
      </div>
      <div class="flex gap-2.5 items-center my-1.5">
        <div
          class="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center shrink-0"
        >
          <UIcon name="i-lucide-shopping-cart" class="w-4 h-4 text-white" />
        </div>
        <div class="flex-grow min-w-0">
          <span class="text-[9px] font-bold text-slate-800 block truncate"
            >Modern Speaker OS</span
          >
          <div class="flex items-center justify-between">
            <span class="text-[8px] text-slate-500">Qty: 01</span>
            <span class="text-[9px] font-bold text-slate-900">$129.00</span>
          </div>
        </div>
      </div>
      <div
        class="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-1.5 px-2 text-[8px] font-bold tracking-wide uppercase text-center transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
      >
        <span>Place Order Instantly</span>
        <UIcon name="i-lucide-arrow-right" class="w-2.5 h-2.5" />
      </div>
    </div>

    <!-- Common Footer -->
    <div class="relative z-10 pt-2 flex items-center justify-between">
      <div>
        <h3
          class="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest leading-none mb-1"
        >
          {{ card.category }}
        </h3>
        <span
          class="text-sm font-semibold text-slate-800 transition-colors"
          :class="card.textHover"
        >
          {{ card.title }}
        </span>
      </div>
      <div
        class="w-7 h-7 rounded-lg border flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
        :class="card.btnClass"
      >
        <UIcon name="i-lucide-arrow-right" class="w-3.5 h-3.5" />
      </div>
    </div>
  </div>
</template>