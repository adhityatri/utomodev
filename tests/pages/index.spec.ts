import { describe, it, expect, vi, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import IndexPage from "~/pages/index.vue";

describe("pages/index.vue", () => {
  let useHeadMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    useHeadMock = vi.fn();
    vi.stubGlobal("useHead", useHeadMock);
  });

  const mountComponent = (isMobile = false) => {
    vi.stubGlobal("useDevice", () => ({ isMobile }));

    return shallowMount(IndexPage, {
      global: {
        mocks: {
          $t: (key: string) => key,
        },
        stubs: {
          "home-hero": { template: "<div data-testid='hero'></div>" },
          "app-mini-contact-section": {
            template: "<div data-testid='mini-contact'></div>",
          },
          "home-services": { template: "<div data-testid='services'></div>" },
          "home-process": { template: "<div data-testid='process'></div>" },
          "app-c-t-a-sections": { template: "<div data-testid='cta'></div>" },
        },
      },
    });
  };

  it("renders the main element", () => {
    const wrapper = mountComponent();
    expect(wrapper.find("main").exists()).toBe(true);
  });

  it("renders hero section", () => {
    const wrapper = mountComponent();
    expect(wrapper.find('[data-testid="hero"]').exists()).toBe(true);
  });

  it("renders services section", () => {
    const wrapper = mountComponent();
    expect(wrapper.find('[data-testid="services"]').exists()).toBe(true);
  });

  it("renders process section", () => {
    const wrapper = mountComponent();
    expect(wrapper.find('[data-testid="process"]').exists()).toBe(true);
  });

  it("renders CTA section", () => {
    const wrapper = mountComponent();
    expect(wrapper.find('[data-testid="cta"]').exists()).toBe(true);
  });

  it("shows mini contact section on desktop", () => {
    const wrapper = mountComponent(false);
    expect(wrapper.find('[data-testid="mini-contact"]').exists()).toBe(true);
  });

  it("hides mini contact section on mobile", () => {
    const wrapper = mountComponent(true);
    expect(wrapper.find('[data-testid="mini-contact"]').exists()).toBe(false);
  });

  it("calls useHead with correct title", () => {
    mountComponent();
    expect(useHeadMock).toHaveBeenCalled();
    const headConfig = useHeadMock.mock.calls[0][0];
    expect(headConfig.title).toBe("Bitaska");
  });
});
