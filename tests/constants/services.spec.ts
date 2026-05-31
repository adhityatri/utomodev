import { describe, it, expect } from "vitest";
import { SERVICES } from "~/constants/services";

describe("constants/services.ts", () => {
  it("has 4 services defined", () => {
    expect(SERVICES).toHaveLength(4);
  });

  it("each service has required fields", () => {
    SERVICES.forEach((service) => {
      expect(service.title).toBeDefined();
      expect(service.description).toBeDefined();
      expect(service.icon).toBeDefined();
    });
  });

  it("includes Web Development service", () => {
    const webDev = SERVICES.find((s) => s.title === "Web Development");
    expect(webDev).toBeDefined();
    expect(webDev!.icon).toBe("solar:code-2-bold");
  });

  it("includes Mobile App Development service", () => {
    const mobile = SERVICES.find((s) => s.title === "Mobile App Development");
    expect(mobile).toBeDefined();
    expect(mobile!.icon).toBe("solar:iphone-line-duotone");
  });

  it("includes UI/UX Design service", () => {
    const uiux = SERVICES.find((s) => s.title === "UI/UX Design");
    expect(uiux).toBeDefined();
    expect(uiux!.icon).toBe("solar:gallery-edit-linear");
  });

  it("includes E-commerce Solutions service", () => {
    const ecommerce = SERVICES.find((s) => s.title === "E-commerce Solutions");
    expect(ecommerce).toBeDefined();
    expect(ecommerce!.icon).toBe("solar:ruler-pen-line-duotone");
  });
});
