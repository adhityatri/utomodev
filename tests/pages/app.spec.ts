import { describe, it, expect, vi, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import App from "~/app.vue";

describe("app.vue", () => {
  let useHeadMock: ReturnType<typeof vi.fn>;
  let useSeoMetaMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    useHeadMock = vi.fn();
    useSeoMetaMock = vi.fn();
    vi.stubGlobal("useHead", useHeadMock);
    vi.stubGlobal("useSeoMeta", useSeoMetaMock);
  });

  const mountComponent = () =>
    shallowMount(App, {
      global: {
        stubs: {
          UApp: { template: "<div><slot /></div>" },
          NuxtRouteAnnouncer: { template: "<div></div>" },
          NuxtPage: { template: "<div data-testid='nuxt-page'></div>" },
          "app-top-bar": { template: "<header data-testid='top-bar'></header>" },
          "app-footer": { template: "<footer data-testid='footer'></footer>" },
        },
      },
    });

  it("renders the app layout", () => {
    const wrapper = mountComponent();
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("renders the top bar", () => {
    const wrapper = mountComponent();
    expect(wrapper.find('[data-testid="top-bar"]').exists()).toBe(true);
  });

  it("renders the NuxtPage slot", () => {
    const wrapper = mountComponent();
    expect(wrapper.find('[data-testid="nuxt-page"]').exists()).toBe(true);
  });

  it("renders the footer", () => {
    const wrapper = mountComponent();
    expect(wrapper.find('[data-testid="footer"]').exists()).toBe(true);
  });

  it("calls useSeoMeta with correct data", () => {
    mountComponent();
    expect(useSeoMetaMock).toHaveBeenCalled();
    const seoConfig = useSeoMetaMock.mock.calls[0][0];
    expect(seoConfig.title).toBe("Bitaska");
    expect(seoConfig.ogTitle).toContain("Bitaska");
  });

  it("calls useHead for scroll-smooth", () => {
    mountComponent();
    expect(useHeadMock).toHaveBeenCalled();
  });
});
