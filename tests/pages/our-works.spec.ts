import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import OurWorksPage from "~/pages/our-works/index.vue";

describe("pages/our-works/index.vue", () => {
  const mountComponent = () => {
    vi.stubGlobal("definePageMeta", vi.fn());

    return mount(OurWorksPage, {
      global: {
        stubs: {
          UContainer: { template: "<div><slot /></div>", props: ["as"] },
        },
      },
    });
  };

  it("renders the page", () => {
    const wrapper = mountComponent();
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("displays page content", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("Our Works Page");
  });
});
