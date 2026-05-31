import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MiniContactSection from "~/components/app/MiniContactSection.vue";

describe("MiniContactSection.vue", () => {
  const mountComponent = () =>
    mount(MiniContactSection, {
      global: {
        stubs: {
          UContainer: { template: "<div><slot /></div>", props: ["as"] },
          UIcon: { template: '<span class="icon"></span>', props: ["name"] },
        },
      },
    });

  it("renders the section", () => {
    const wrapper = mountComponent();
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("has primary background class", () => {
    const wrapper = mountComponent();
    expect(wrapper.find(".bg-primary").exists()).toBe(true);
  });

  it("displays contact information", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("+6285128031998");
    expect(wrapper.text()).toContain("hello@bitaska.my.id");
  });

  it("renders social media icons", () => {
    const wrapper = mountComponent();
    const icons = wrapper.findAll(".icon");
    // 2 contact icons + 2 social icons = 4
    expect(icons.length).toBeGreaterThanOrEqual(4);
  });
});
