import { vi } from "vitest";
import { config } from "@vue/test-utils";

// Mock Nuxt auto-imports
vi.stubGlobal("definePageMeta", vi.fn());
vi.stubGlobal("useHead", vi.fn());
vi.stubGlobal("useSeoMeta", vi.fn());
vi.stubGlobal(
  "useDevice",
  vi.fn(() => ({ isMobile: false }))
);
vi.stubGlobal(
  "useI18n",
  vi.fn(() => ({
    t: (key: string) => key,
    locale: { value: "id" },
    locales: [
      { code: "id", name: "Indonesia" },
      { code: "en", name: "English" },
    ],
    setLocale: vi.fn(),
  }))
);
vi.stubGlobal("$t", (key: string) => key);
vi.stubGlobal(
  "useCookieLocale",
  vi.fn(() => ({ value: "id" }))
);
vi.stubGlobal("navigateTo", vi.fn());
vi.stubGlobal("useAsyncData", vi.fn(() => ({ data: { value: [] } })));
vi.stubGlobal("useDateFormat", vi.fn((date: string, format: string) => date));
vi.stubGlobal("defineStore", vi.fn());
vi.stubGlobal("ref", vi.fn((val: any) => ({ value: val })));
vi.stubGlobal("computed", vi.fn((fn: any) => ({ value: fn() })));

// Mock NuxtLink as a simple anchor
config.global.stubs = {
  NuxtLink: {
    template: '<a :href="to"><slot /></a>',
    props: ["to"],
  },
  NuxtPage: { template: "<div data-testid='nuxt-page'></div>" },
  NuxtRouteAnnouncer: { template: "<div></div>" },
  NuxtImg: { template: '<img />' },
  UButton: {
    template: '<button :class="$attrs.class" @click="$emit(\'click\')"><slot /><slot name="leading" /><slot name="trailing" /></button>',
    props: ["variant", "color", "size", "icon", "to"],
  },
  UContainer: {
    template: '<div><slot /></div>',
    props: ["as"],
  },
  UCard: { template: "<div><slot /></div>" },
  UIcon: { template: '<span class="icon"></span>', props: ["name"] },
  USlideover: {
    template: '<div v-if="open"><slot /><slot name="header" /><slot name="body" /></div>',
    props: ["open", "title"],
  },
  UNavigationMenu: { template: "<nav><slot /></nav>", props: ["items", "orientation"] },
  USeparator: { template: "<hr />", props: ["label"] },
  UApp: { template: "<div><slot /></div>" },
  ContentRenderer: { template: "<div></div>", props: ["value"] },
  "motion-group": { template: "<div><slot /></div>" },
  "app-brand": { template: "<div data-testid='app-brand'></div>" },
  "app-menu": { template: "<nav data-testid='app-menu'></nav>" },
  "app-contact-button": { template: "<button data-testid='contact-btn'></button>" },
  "app-switch-lang": { template: "<div data-testid='switch-lang'></div>" },
  "app-top-bar": { template: "<header data-testid='top-bar'></header>" },
  "app-footer": { template: "<footer data-testid='footer'></footer>" },
  "app-mini-contact-section": { template: "<div data-testid='mini-contact'></div>" },
  "app-c-t-a-sections": { template: "<div data-testid='cta-sections'></div>" },
  "home-hero": { template: "<div data-testid='home-hero'></div>" },
  "home-services": { template: "<div data-testid='home-services'></div>" },
  "home-process": { template: "<div data-testid='home-process'></div>" },
  "text-heading": { template: "<h1><slot /></h1>" },
  HeroCard: { template: "<div data-testid='hero-card'></div>", props: ["card", "isMounted"] },
};
