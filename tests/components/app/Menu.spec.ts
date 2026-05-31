import { describe, it, expect, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Menu from "~/components/app/Menu.vue";

describe("Menu.vue", () => {
  const mountComponent = (isMobile = false) => {
    vi.stubGlobal("useDevice", () => ({ isMobile }));
    vi.stubGlobal("$t", (key: string) => key);

    return shallowMount(Menu, {
      global: {
        mocks: {
          $t: (key: string) => key,
        },
        stubs: {
          UButton: {
            template: '<button @click="$emit(\'click\')"><slot /></button>',
            props: ["variant", "color", "size", "icon"],
          },
          UNavigationMenu: {
            template: "<nav data-testid='nav-menu'><slot /></nav>",
            props: ["items", "orientation"],
          },
          USlideover: {
            template:
              '<div data-testid="slideover"><slot /><slot name="header" /><slot name="body" /></div>',
            props: ["open", "title"],
          },
          "app-brand": { template: "<div></div>" },
        },
      },
    });
  };

  it("renders navigation menu on desktop", () => {
    const wrapper = mountComponent(false);
    expect(wrapper.find('[data-testid="nav-menu"]').exists()).toBe(true);
  });

  it("renders slideover on mobile", () => {
    const wrapper = mountComponent(true);
    expect(wrapper.find('[data-testid="slideover"]').exists()).toBe(true);
  });

  it("renders navigation menu component", () => {
    const wrapper = mountComponent(false);
    expect(wrapper.find("nav").exists()).toBe(true);
  });
});
