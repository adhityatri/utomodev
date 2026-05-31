import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import SwitchLang from "~/components/app/SwitchLang.vue";

describe("SwitchLang.vue", () => {
  const setLocaleMock = vi.fn();

  const mountComponent = () => {
    vi.stubGlobal("useI18n", () => ({
      locales: [
        { code: "id", name: "Indonesia" },
        { code: "en", name: "English" },
      ],
      setLocale: setLocaleMock,
      locale: { value: "id" },
    }));
    vi.stubGlobal("useCookieLocale", () => ({ value: "id" }));
    vi.stubGlobal("useDevice", () => ({ isMobile: false }));

    return mount(SwitchLang, {
      global: {
        stubs: {
          UButton: {
            template:
              '<button :data-variant="variant" @click="$emit(\'click\')"><slot /></button>',
            props: ["variant", "size", "ui"],
          },
        },
      },
    });
  };

  it("renders language buttons", () => {
    const wrapper = mountComponent();
    const buttons = wrapper.findAll("button");
    expect(buttons.length).toBe(2);
  });

  it("displays locale codes", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("id");
    expect(wrapper.text()).toContain("en");
  });

  it("calls setLocale on button click", async () => {
    const wrapper = mountComponent();
    const buttons = wrapper.findAll("button");
    await buttons[1].trigger("click");
    expect(setLocaleMock).toHaveBeenCalled();
  });
});
