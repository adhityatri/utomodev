import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import CTASections from "~/components/app/CTASections.vue";

describe("CTASections.vue", () => {
  const mountComponent = () =>
    mount(CTASections, {
      global: {
        mocks: {
          $t: (key: string) => key,
        },
        stubs: {
          UButton: {
            template: '<button @click="$emit(\'click\')"><slot /><slot name="leading" /></button>',
            props: ["variant", "color", "size", "icon"],
          },
          UIcon: { template: '<span class="icon"></span>', props: ["name"] },
          UContainer: { template: "<div><slot /></div>" },
        },
      },
    });

  it("renders the CTA section", () => {
    const wrapper = mountComponent();
    expect(wrapper.find("section").exists()).toBe(true);
  });

  it("has the contact section id", () => {
    const wrapper = mountComponent();
    expect(wrapper.find("#contact").exists()).toBe(true);
  });

  it("displays the CTA title translation key", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("cta.title");
  });

  it("displays the CTA subtitle translation key", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("cta.subtitle");
  });

  it("contains WhatsApp link", () => {
    const wrapper = mountComponent();
    const link = wrapper.find('a[href*="wa.me"]');
    expect(link.exists()).toBe(true);
    expect(link.attributes("href")).toContain("6285128031998");
  });

  it("has copy email button", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("Copy Our Email");
  });

  it("copies email to clipboard on button click", async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal("navigator", {
      clipboard: { writeText: writeTextMock },
    });

    const wrapper = mountComponent();
    const copyBtn = wrapper.findAll("button").find((b) => b.text().includes("Copy Our Email"));
    expect(copyBtn).toBeDefined();
    await copyBtn!.trigger("click");
    expect(writeTextMock).toHaveBeenCalledWith("hello@bitaska.my.id");
  });

  it("shows trust badges", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("Free Consultation");
    expect(wrapper.text()).toContain("Quick Proposal Turnaround");
  });
});
