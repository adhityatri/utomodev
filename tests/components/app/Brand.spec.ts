import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Brand from "~/components/app/Brand.vue";

describe("Brand.vue", () => {
  const mockRouter = {
    push: vi.fn(),
  };

  const mountComponent = () =>
    shallowMount(Brand, {
      global: {
        mocks: {
          $router: mockRouter,
        },
      },
    });

  it("renders the brand logo image", () => {
    const wrapper = mountComponent();
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("alt")).toBe("brand-logo");
    expect(img.attributes("src")).toBe("/brand-sub.png");
  });

  it("has correct image dimensions", () => {
    const wrapper = mountComponent();
    const img = wrapper.find("img");
    expect(img.attributes("height")).toBe("32");
    expect(img.attributes("width")).toBe("112");
  });

  it("navigates to home on click", async () => {
    const wrapper = mountComponent();
    await wrapper.find("div").trigger("click");
    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });

  it("has cursor-pointer class for clickability", () => {
    const wrapper = mountComponent();
    expect(wrapper.find("div").classes()).toContain("cursor-pointer");
  });
});
