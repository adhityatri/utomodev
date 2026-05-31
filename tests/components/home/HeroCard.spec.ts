import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HeroCard from "~/components/home/HeroCard.vue";

describe("HeroCard.vue", () => {
  const mockCard = {
    id: "web",
    delay: "500ms",
    theme: "indigo",
    shadow: "rgba(79,70,229,0.06)",
    category: "Web Platform",
    title: "Web Dev",
    bgClass: "from-indigo-50/20",
    hoverBorder: "hover:border-indigo-200/80",
    textHover: "group-hover:text-indigo-600",
    btnClass: "bg-indigo-50 text-indigo-600 border-indigo-100",
  };

  const mountComponent = (props = {}) =>
    mount(HeroCard, {
      props: { card: mockCard, isMounted: true, ...props },
      global: {
        stubs: {
          UIcon: { template: '<span class="icon"></span>', props: ["name"] },
        },
      },
    });

  it("renders the card", () => {
    const wrapper = mountComponent();
    expect(wrapper.find("div").exists()).toBe(true);
  });

  it("displays the card category", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("Web Platform");
  });

  it("displays the card title", () => {
    const wrapper = mountComponent();
    expect(wrapper.text()).toContain("Web Dev");
  });

  it("applies mounted animation classes when isMounted is true", () => {
    const wrapper = mountComponent({ isMounted: true });
    const card = wrapper.find("div");
    expect(card.classes()).toContain("opacity-100");
  });

  it("applies hidden classes when isMounted is false", () => {
    const wrapper = mountComponent({ isMounted: false });
    const card = wrapper.find("div");
    expect(card.classes()).toContain("opacity-0");
  });

  it("renders mobile card variant", () => {
    const mobileCard = {
      ...mockCard,
      id: "mobile",
      category: "Mobile Interface",
      title: "Mobile Apps",
    };
    const wrapper = mount(HeroCard, {
      props: { card: mobileCard, isMounted: true },
      global: {
        stubs: {
          UIcon: { template: '<span class="icon"></span>', props: ["name"] },
        },
      },
    });
    expect(wrapper.text()).toContain("Mobile Interface");
  });

  it("renders design card variant", () => {
    const designCard = {
      ...mockCard,
      id: "design",
      category: "Visual Architecture",
      title: "UI/UX Design",
    };
    const wrapper = mount(HeroCard, {
      props: { card: designCard, isMounted: true },
      global: {
        stubs: {
          UIcon: { template: '<span class="icon"></span>', props: ["name"] },
        },
      },
    });
    expect(wrapper.text()).toContain("Visual Architecture");
  });

  it("renders commerce card variant", () => {
    const commerceCard = {
      ...mockCard,
      id: "commerce",
      category: "Digital Trade",
      title: "E-commerce",
    };
    const wrapper = mount(HeroCard, {
      props: { card: commerceCard, isMounted: true },
      global: {
        stubs: {
          UIcon: { template: '<span class="icon"></span>', props: ["name"] },
        },
      },
    });
    expect(wrapper.text()).toContain("Digital Trade");
  });
});
