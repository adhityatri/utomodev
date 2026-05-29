<template>
  <div
    :class="{ 'h-[50dvh]': isMobile, 'h-[80dvh]': !isMobile }"
    class="flex flex-col items-start justify-center relative"
  >
    <UContainer as="section" class="relative">
      <motion-group preset="slideVisibleBottom" delay="0.2">
        <img
          v-if="!isMobile"
          class="absolute top-[-4em] left-[-4em] z-[-1]"
          width="150"
          height="150"
          src="/cross.svg"
          alt="doodle1"
        />
        <div
          class="ring-1 ring-primary-600/25 font-bold py-1 px-4 bg-primary-50 text-primary w-50 rounded-full"
          :class="{ 'mb-4': isMobile }"
        >
          <small>Human Centric Experience</small>
        </div>
        <div class="relative">
          <h1
            class="text-[60px] font-bold leading-[5rem]"
            :class="{ 'text-[32px]! leading-[32px]!': isMobile }"
          >
            <span class="whitespace-pre-wrap">{{ $t("slogan") }}</span>
          </h1>
          <img src="/handdraw2.svg" :width="isMobile ? '200' : '400'" alt="handdraw1" />
        </div>

        <h3 class="text-[2rem] mt-4 mb-8" :class="{ 'text-[1.5rem]!': isMobile }">
          {{ $t("sub-slogan") }}
        </h3>

        <home-cta />

        <img
          v-if="!isMobile"
          class="absolute -z-10 right-0 top-[80%] translate-y-[-40%]"
          :class="{ 'top-[100%]!': isMobile }"
          :width="isMobile ? '200' : '700'"
          src="/development.png"
          alt="development"
        />
      </motion-group>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
  const { isMobile } = useDevice();
</script>
