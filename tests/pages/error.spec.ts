import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import ErrorPage from "~/error.vue";

describe("error.vue", () => {
  const mountComponent = () => {
    vi.stubGlobal("definePageMeta", vi.fn());

    return shallowMount(ErrorPage, {
      global: {
        stubs: {
          UContainer: { template: "<div><slot /></div>", props: ["as"] },
          UButton: {
            template: '<button><slot /></button>',
            props: ["to", "size"],
          },
          "text-heading": { template: "<h1><slot /></h1>" },
        },
      },
    });
  };

  it("renders the error page", () => {
    const wrapper = mountComponent();
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("displays Oops message", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("Oops...");
  });

  it("displays error description", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("page that doesn't exist");
  });

  it("has a Go Back button", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("Go Back");
  });

  it("renders the not-found image", () => {
    const wrapper = mountComponent();
    const img = wrapper.find('img[alt="not-found-image"]');
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe("/interface-searching.svg");
  });
});
