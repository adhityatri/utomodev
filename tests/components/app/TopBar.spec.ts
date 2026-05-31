import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import TopBar from "~/components/app/TopBar.vue";

describe("TopBar.vue", () => {
  const mountComponent = (isMobile = false) => {
    vi.stubGlobal("useDevice", () => ({ isMobile }));
    vi.stubGlobal("useWindowScroll", () => ({ y: { value: 0 } }));

    return mount(TopBar, {
      global: {
        stubs: {
          UContainer: { template: "<div><slot /></div>", props: ["as"] },
          "app-brand": { template: "<div data-testid='brand'></div>" },
          "app-menu": { template: "<nav data-testid='menu'></nav>" },
          "app-contact-button": { template: "<button data-testid='contact-btn'></button>" },
          "app-switch-lang": { template: "<div data-testid='switch-lang'></div>" },
        },
      },
    });
  };

  it("renders the header", () => {
    const wrapper = mountComponent();
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("has sticky positioning", () => {
    const wrapper = mountComponent();
    expect(wrapper.find(".sticky").exists()).toBe(true);
  });

  it("renders brand component", () => {
    const wrapper = mountComponent();
    expect(wrapper.find('[data-testid="brand"]').exists()).toBe(true);
  });

  it("renders menu component", () => {
    const wrapper = mountComponent();
    expect(wrapper.find('[data-testid="menu"]').exists()).toBe(true);
  });

  it("renders switch lang component", () => {
    const wrapper = mountComponent();
    expect(wrapper.find('[data-testid="switch-lang"]').exists()).toBe(true);
  });

  it("shows contact button on desktop", () => {
    const wrapper = mountComponent(false);
    expect(wrapper.find('[data-testid="contact-btn"]').exists()).toBe(true);
  });

  it("hides contact button on mobile", () => {
    const wrapper = mountComponent(true);
    expect(wrapper.find('[data-testid="contact-btn"]').exists()).toBe(false);
  });
});
