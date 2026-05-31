import { describe, it, expect, vi, beforeEach } from "vitest";
import { shallowMount } from "@vue/test-utils";
import AboutPage from "~/pages/about-us/index.vue";

describe("pages/about-us/index.vue", () => {
  let useHeadMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    useHeadMock = vi.fn();
    vi.stubGlobal("useHead", useHeadMock);
    vi.stubGlobal("useDevice", () => ({ isMobile: false }));
  });

  const mountComponent = () =>
    shallowMount(AboutPage, {
      global: {
        mocks: {
          $t: (key: string) => key,
        },
        stubs: {
          UContainer: { template: "<div><slot /></div>", props: ["as"] },
          UIcon: { template: '<span class="icon"></span>', props: ["name"] },
          "nuxt-img": { template: "<img />", props: ["src", "alt", "provider"] },
          "app-contact-button": {
            template: "<button data-testid='contact-btn'></button>",
            props: ["size", "class"],
          },
          "motion-group": { template: "<div><slot /></div>" },
        },
      },
    });

  it("renders the page", () => {
    const wrapper = mountComponent();
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("displays company name", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("Bitaska");
  });

  it("displays about description translation key", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("about.description");
  });

  it("displays office information", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("Office");
    expect(wrapper.text()).toContain("Jl. Kasuari Blok KK3 No 31");
    expect(wrapper.text()).toContain("Patrang, Jember");
  });

  it("displays contact details", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("+6285128031998");
    expect(wrapper.text()).toContain("hello@bitaska.my.id");
  });

  it("renders Google Maps iframe", () => {
    const wrapper = mountComponent();
    const iframe = wrapper.find("iframe");
    expect(iframe.exists()).toBe(true);
    expect(iframe.attributes("src")).toContain("google.com/maps");
  });

  it("displays CTA section", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("Ready To Move Forward With Us?");
  });

  it("renders contact button in CTA", () => {
    const wrapper = mountComponent();
    expect(wrapper.find('[data-testid="contact-btn"]').exists()).toBe(true);
  });

  it("calls useHead with correct title", () => {
    mountComponent();
    expect(useHeadMock).toHaveBeenCalled();
    const headConfig = useHeadMock.mock.calls[0][0];
    expect(headConfig.title).toBe("About Us - Bitaska");
  });
});
