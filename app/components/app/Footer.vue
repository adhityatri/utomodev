<!-- <template>
  <UContainer
    as="footer"
    class="mt-8 py-6 flex justify-between items-start"
    :class="{ 'flex-col-reverse': isMobile }"
  >
    <div class="flex-1">
      <h1 class="font-bold mb-2">Office</h1>
      <p>{{ PROFILE.address }}</p>
      <p class="mb-2">{{ PROFILE.city }}</p>
      <p>Phone: {{ PROFILE.contact[0].value }}</p>
      <p>Email: {{ PROFILE.contact[1].value }}</p>
    </div>
    <img src="/brand-sub.png" height="32" width="112" alt="brand-sub-logo" />
  </UContainer>
</template>

<script setup lang="ts">
  import { PROFILE } from "~/constants/profile";

  const { isMobile } = useDevice();
</script> -->

<script setup>
  import { PROFILE } from "~/constants/profile";

  const currentYear = new Date().getFullYear();
</script>

<template>
  <footer id="contact" class="bg-white pt-20 pb-10 border-t border-slate-100 text-slate-600">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 font-sans">
        <div class="lg:col-span-2">
          <a href="#" class="flex items-center gap-2 mb-6">
            <img class="-ml-2" alt="brand-sub-logo" height="52" src="/brand-sub.png" width="112" />
          </a>
          <p class="text-slate-500 max-w-sm text-sm leading-relaxed">
            Mengakselerasi transformasi digital melalui solusi teknologi yang inovatif, scalable,
            dan berorientasi pada pertumbuhan bisnis.
          </p>
        </div>

        <div>
          <h4 class="text-slate-900 font-semibold mb-6">Navigasi</h4>
          <ul class="space-y-3">
            <li>
              <a href="#" class="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                {{ $t("menu.home") }}
              </a>
            </li>
            <li>
              <a
                href="#services"
                class="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                {{ $t("menu.services") }}
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                class="text-sm text-slate-500 hover:text-slate-900 transition-colors"
              >
                {{ $t("menu.about") }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-slate-900 font-semibold mb-6">Office & Kontak</h4>
          <address class="not-italic text-sm text-slate-500 space-y-4">
            <p class="leading-relaxed">
              {{ PROFILE.address }}
            </p>
            <p class="space-y-1">
              <a
                href="tel:{{ PROFILE.contact[0].value }}"
                class="hover:text-slate-900 transition-colors block"
              >
                {{ PROFILE.contact[0].value }}
              </a>
              <a
                href="mailto:hello@bitaska.my.id"
                class="hover:text-slate-900 transition-colors block"
              >
                {{ PROFILE.contact[1].value }}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div
        class="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p class="text-slate-400 text-sm font-sans">
          &copy; {{ currentYear }} Bitaska Labs. All rights reserved.
        </p>
        <!-- <div class="flex gap-6">
          <a href="#" class="text-slate-400 hover:text-slate-900 transition-colors text-sm">
            LinkedIn
          </a>
          <a href="#" class="text-slate-400 hover:text-slate-900 transition-colors text-sm">
            Instagram
          </a>
          <a href="#" class="text-slate-400 hover:text-slate-900 transition-colors text-sm">
            Twitter
          </a>
        </div> -->
      </div>
    </div>
  </footer>
</template>
