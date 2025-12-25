<!-- Referensi https://nurosoft.id/ -->

<template>
  <UContainer ref="process" as="section" class="pt-[6em] pb-[2em] relative overflow-hidden">
    <div class="relative overflow-hidden flex gap-4">
      <text-heading class="mb-2!">{{ $t("process") }}</text-heading>
      <img class="" width="20px" src="/triangle-dot.svg" alt="triangle-dot-image" />
    </div>
    <span class="text-[22px]">{{ $t("process-sub-title") }}</span>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[100px] mb-[50px] gap-4">
      <div class="shadow-lg px-6 py-6 rounded-xl bg-neutral-50 hover:bg-neutral-100">
        <div class="mb-6 rounded-xl bg-primary text-white shadow-lg px-4 relative overflow-hidden">
          <img
            src="/circle.svg"
            alt="circle-image"
            width="450"
            class="absolute bottom-[-7em] left-[-4em] opacity-15"
          />
          <h3 class="font-bold text-[60px] text-right">1</h3>
        </div>
        <p class="text-xl font-bold">Discovery & Requirements Gathering</p>
        <p class="mt-4">
          {{ $t("process-step.discover") }}
        </p>
      </div>
      <div class="shadow-lg px-6 py-6 rounded-xl bg-neutral-50 hover:bg-neutral-100">
        <div class="mb-6 rounded-xl bg-primary text-white shadow-lg px-4 relative overflow-hidden">
          <img
            src="/circle.svg"
            alt="circle-image"
            width="450"
            class="absolute bottom-[-7em] left-[-4em] opacity-15"
          />
          <h3 class="font-bold text-[60px] text-right">2</h3>
        </div>
        <p class="text-xl font-bold">Design & Prototyping</p>
        <p class="mt-4">
          {{ $t("process-step.design") }}
        </p>
      </div>
      <div class="shadow-lg px-6 py-6 rounded-xl bg-neutral-50 hover:bg-neutral-100">
        <div class="mb-6 rounded-xl bg-primary text-white shadow-lg px-4 relative overflow-hidden">
          <img
            src="/circle.svg"
            alt="circle-image"
            width="450"
            class="absolute bottom-[-7em] left-[-4em] opacity-15"
          />
          <h3 class="font-bold text-[60px] text-right">3</h3>
        </div>
        <p class="text-xl font-bold">Development</p>
        <p class="mt-4">
          {{ $t("process-step.development") }}
        </p>
      </div>
      <div class="shadow-lg px-6 py-6 rounded-xl bg-neutral-50 hover:bg-neutral-100">
        <div class="mb-6 rounded-xl bg-primary text-white shadow-lg px-4 relative overflow-hidden">
          <img
            src="/circle.svg"
            alt="circle-image"
            width="450"
            class="absolute bottom-[-7em] left-[-4em] opacity-15"
          />
          <h3 class="font-bold text-[60px] text-right">4</h3>
        </div>
        <p class="text-xl font-bold">Testing & QA</p>
        <p class="mt-4">
          {{ $t("process-step.testing") }}
        </p>
      </div>
      <div class="shadow-lg px-6 py-6 rounded-xl bg-neutral-50 hover:bg-neutral-100">
        <div class="mb-6 rounded-xl bg-primary text-white shadow-lg px-4 relative overflow-hidden">
          <img
            src="/circle.svg"
            alt="circle-image"
            width="450"
            class="absolute bottom-[-7em] left-[-4em] opacity-15"
          />
          <h3 class="font-bold text-[60px] text-right">5</h3>
        </div>
        <p class="text-xl font-bold">Deployment and Launch</p>
        <p class="mt-4">
          {{ $t("process-step.launch") }}
        </p>
      </div>
      <div class="shadow-lg px-6 py-6 rounded-xl bg-neutral-50 hover:bg-neutral-100">
        <div class="mb-6 rounded-xl bg-primary text-white shadow-lg px-4 relative overflow-hidden">
          <img
            src="/circle.svg"
            alt="circle-image"
            width="450"
            class="absolute bottom-[-7em] left-[-4em] opacity-15"
          />
          <h3 class="font-bold text-[60px] text-right">6</h3>
        </div>
        <p class="text-xl font-bold">Maintenance and Support</p>
        <p class="mt-4">
          {{ $t("process-step.maintenance") }}
        </p>
      </div>
    </div>
  </UContainer>
</template>
