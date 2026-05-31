import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Services from "~/components/home/Services.vue";

describe("Services.vue", () => {
  // Note: The Services component uses $t() directly in <script setup> as a Nuxt auto-import.
  // In unit tests without the full Nuxt runtime, the computed `data` may not resolve translations.
  // We test the template structure and static elements.

  const mountComponent = () => {
    vi.stubGlobal("useDevice", () => ({ isMobile: false }));
    vi.stubGlobal("$t", (key: string) => key);

    return mount(Services, {
      global: {
        mocks: {
          $t: (key: string) => key,
        },
        stubs: {
          UContainer: { template: "<div><slot /></div>", props: ["as"] },
          UCard: { template: "<div class='card'><slot /></div>" },
          UIcon: { template: '<span class="icon"></span>', props: ["name"] },
          "text-heading": { template: "<h1><slot /></h1>" },
          "motion-group": { template: "<div><slot /></div>" },
        },
      },
    });
  };

  it("renders the services section with correct id", () => {
    const wrapper = mountComponent();
    expect(wrapper.find("#services").exists()).toBe(true);
  });

  it("has primary background class", () => {
    const wrapper = mountComponent();
    expect(wrapper.find(".bg-primary").exists()).toBe(true);
  });

  it("displays offer title translation key in template", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("offer-title");
  });

  it("displays offer subtitle translation key in template", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("offer-sub-title");
  });

  it("renders the decorative cross-white image", () => {
    const wrapper = mountComponent();
    const img = wrapper.find('img[src="/cross-white.svg"]');
    expect(img.exists()).toBe(true);
    expect(img.attributes("alt")).toBe("cross-white");
  });

  it("has a grid layout for service cards", () => {
    const wrapper = mountComponent();
    expect(wrapper.find(".grid").exists()).toBe(true);
  });

  it("renders at least one service card", () => {
    const wrapper = mountComponent();
    // Even if $t fails, the v-for should still iterate over the computed array
    const cards = wrapper.findAll(".card");
    expect(cards.length).toBeGreaterThanOrEqual(1);
  });
});
