import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Heading from "~/components/text/Heading.vue";

describe("Heading.vue", () => {
  it("renders an h1 element", () => {
    const wrapper = mount(Heading);
    expect(wrapper.find("h1").exists()).toBe(true);
  });

  it("renders slot content", () => {
    const wrapper = mount(Heading, {
      slots: {
        default: "Hello World",
      },
    });
    expect(wrapper.text()).toBe("Hello World");
  });

  it("has correct styling classes", () => {
    const wrapper = mount(Heading);
    const h1 = wrapper.find("h1");
    expect(h1.classes()).toContain("mb-8");
    expect(h1.classes()).toContain("font-bold");
  });

  it("renders HTML content in slot", () => {
    const wrapper = mount(Heading, {
      slots: {
        default: '<span class="test">Styled Content</span>',
      },
    });
    expect(wrapper.find("span.test").exists()).toBe(true);
    expect(wrapper.text()).toContain("Styled Content");
  });
});
