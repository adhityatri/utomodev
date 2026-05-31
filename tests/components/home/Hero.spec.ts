import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Hero from "~/components/home/Hero.vue";

describe("Hero.vue", () => {
  const mountComponent = () => {
    vi.stubGlobal("useDevice", () => ({ isMobile: false }));

    return mount(Hero, {
      global: {
        mocks: {
          $t: (key: string) => key,
        },
        stubs: {
          UButton: {
            template: '<button><slot /><slot name="trailing" /></button>',
            props: ["to", "color", "variant", "size"],
          },
          UIcon: { template: '<span class="icon"></span>', props: ["name"] },
          HeroCard: {
            template: '<div data-testid="hero-card"></div>',
            props: ["card", "isMounted"],
          },
        },
      },
    });
  };

  it("renders the hero section", () => {
    const wrapper = mountComponent();
    expect(wrapper.find("section").exists()).toBe(true);
  });

  it("displays the hero badge translation key", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("hero-badge");
  });

  it("displays the slogan translation key", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("slogan");
  });

  it("displays the sub-slogan translation key", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("sub-slogan");
  });

  it("renders CTA buttons", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("learn-more");
    expect(wrapper.text()).toContain("consult");
  });

  it("renders 4 hero cards", () => {
    const wrapper = mountComponent();
    const cards = wrapper.findAll('[data-testid="hero-card"]');
    expect(cards.length).toBe(4);
  });

  it("has background image", () => {
    const wrapper = mountComponent();
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
  });
});
