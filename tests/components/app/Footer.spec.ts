import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Footer from "~/components/app/Footer.vue";

describe("Footer.vue", () => {
  const mountComponent = () =>
    shallowMount(Footer, {
      global: {
        mocks: {
          $t: (key: string) => key,
        },
        stubs: {
          UIcon: { template: '<span class="icon"></span>', props: ["name"] },
        },
      },
    });

  it("renders the footer element", () => {
    const wrapper = mountComponent();
    expect(wrapper.find("footer").exists()).toBe(true);
  });

  it("has the contact id", () => {
    const wrapper = mountComponent();
    expect(wrapper.find("#contact").exists()).toBe(true);
  });

  it("displays the brand logo", () => {
    const wrapper = mountComponent();
    const img = wrapper.find('img[alt="brand-sub-logo"]');
    expect(img.exists()).toBe(true);
  });

  it("displays the company description", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("transformasi digital");
  });

  it("displays navigation links", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("menu.home");
    expect(wrapper.text()).toContain("menu.services");
    expect(wrapper.text()).toContain("menu.about");
  });

  it("displays office address from PROFILE", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("Jl. Kasuari Blok KK3 No 31");
  });

  it("displays contact information", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("+6285128031998");
    expect(wrapper.text()).toContain("hello@bitaska.my.id");
  });

  it("displays copyright with current year", () => {
    const wrapper = mountComponent();
    const currentYear = new Date().getFullYear().toString();
    expect(wrapper.text()).toContain(currentYear);
    expect(wrapper.text()).toContain("Bitaska Labs");
  });
});
