// Mock for #imports used by Nuxt auto-imports
export const useDevice = () => ({ isMobile: false });
export const useI18n = () => ({
  t: (key: string) => key,
  locale: { value: "id" },
  locales: [
    { code: "id", name: "Indonesia" },
    { code: "en", name: "English" },
  ],
  setLocale: () => {},
});
export const useHead = () => {};
export const useSeoMeta = () => {};
export const navigateTo = () => {};
export const useCookieLocale = () => ({ value: "id" });
export const useAsyncData = () => ({ data: { value: [] } });
export const useDateFormat = (date: string) => date;
export const definePageMeta = () => {};
export const ref = (val: any) => ({ value: val });
export const computed = (fn: any) => ({ value: typeof fn === "function" ? fn() : fn });
export const useWindowScroll = () => ({ y: { value: 0 } });
