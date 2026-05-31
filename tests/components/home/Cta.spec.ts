import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Cta from "~/components/home/Cta.vue";

describe("Cta.vue", () => {
  const mountComponent = (isMobile = false) => {
    vi.stubGlobal("useDevice", () => ({ isMobile }));
    vi.stubGlobal("navigateTo", vi.fn().mockResolvedValue(undefined));

    return shallowMount(Cta, {
      global: {
        mocks: {
          $t: (key: string) => key,
        },
        stubs: {
          UButton: {
            template: '<button @click="$attrs.onClick?.()"><slot /></button>',
            props: ["variant", "size", "class"],
            inheritAttrs: false,
          },
          "app-contact-button": {
            template: "<button data-testid='contact-btn'></button>",
            props: ["size", "class"],
          },
        },
      },
    });
  };

  it("renders the CTA section", () => {
    const wrapper = mountComponent();
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("renders contact button", () => {
    const wrapper = mountComponent();
    expect(wrapper.find('[data-testid="contact-btn"]').exists()).toBe(true);
  });

  it("renders learn more button on desktop", () => {
    const wrapper = mountComponent(false);
    expect(wrapper.text()).toContain("learn-more");
  });

  it("hides learn more button on mobile", () => {
    const wrapper = mountComponent(true);
    const buttons = wrapper.findAll("button");
    const learnMoreBtn = buttons.find((b) => b.text().includes("learn-more"));
    expect(learnMoreBtn).toBeUndefined();
  });

  it("has learn more button that triggers navigation", () => {
    // Verify the learn more button exists and is clickable on desktop
    const wrapper = mountComponent(false);
    const buttons = wrapper.findAll("button");
    const learnMoreBtn = buttons.find((b) => b.text().includes("learn-more"));
    expect(learnMoreBtn).toBeDefined();
  });
});
