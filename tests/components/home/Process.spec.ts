import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Process from "~/components/home/Process.vue";

describe("Process.vue", () => {
  const mountComponent = () => {
    vi.stubGlobal("useDevice", () => ({ isMobile: false }));
    vi.stubGlobal("$t", (key: string) => key);

    // Mock IntersectionObserver
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        observe = vi.fn();
        unobserve = vi.fn();
        disconnect = vi.fn();
      }
    );

    return mount(Process, {
      global: {
        mocks: {
          $t: (key: string) => key,
        },
        stubs: {
          UIcon: { template: '<span class="icon"></span>', props: ["name"] },
          UContainer: { template: "<div><slot /></div>", props: ["as"] },
          MousePointerClick: { template: "<span></span>" },
          Check: { template: "<span></span>" },
          Play: { template: "<span></span>" },
          Terminal: { template: "<span></span>" },
        },
      },
    });
  };

  it("renders the process section", () => {
    const wrapper = mountComponent();
    expect(wrapper.find("#process").exists()).toBe(true);
  });

  it("displays process badge translation key", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("process-badge");
  });

  it("displays process title translation key", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("process");
  });

  it("displays process subtitle translation key", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("process-sub-title");
  });

  it("renders 6 process steps", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("Discovery & Requirements");
    expect(wrapper.text()).toContain("Design & Prototyping");
    expect(wrapper.text()).toContain("Modern Development");
    expect(wrapper.text()).toContain("Testing & QA");
    expect(wrapper.text()).toContain("Smooth Deployment");
    expect(wrapper.text()).toContain("Maintenance & Scaling");
  });

  it("displays step numbers", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("01");
    expect(wrapper.text()).toContain("02");
    expect(wrapper.text()).toContain("03");
    expect(wrapper.text()).toContain("04");
    expect(wrapper.text()).toContain("05");
    expect(wrapper.text()).toContain("06");
  });

  it("renders the interactive showcase panel", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("Live Sandbox");
  });
});
