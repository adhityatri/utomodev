import { describe, it, expect } from "vitest";
import { PROFILE } from "~/constants/profile";

describe("constants/profile.ts", () => {
  it("has the correct company name", () => {
    expect(PROFILE.name).toBe("Bitaska");
  });

  it("has a role defined", () => {
    expect(PROFILE.role).toBe("Software House | Problem Solver");
  });

  it("has address information", () => {
    expect(PROFILE.address).toBe("Jl. Kasuari Blok KK3 No 31");
    expect(PROFILE.city).toBe("Patrang, Jember");
  });

  it("has social media links", () => {
    expect(PROFILE.social).toHaveLength(2);
    expect(PROFILE.social[0].name).toBe("instagram");
    expect(PROFILE.social[1].name).toBe("facebook");
  });

  it("has contact information", () => {
    expect(PROFILE.contact).toHaveLength(2);
    expect(PROFILE.contact[0].name).toBe("phone");
    expect(PROFILE.contact[0].value).toBe("+6285128031998");
    expect(PROFILE.contact[1].name).toBe("email");
    expect(PROFILE.contact[1].value).toBe("hello@bitaska.my.id");
  });

  it("social items have icons", () => {
    PROFILE.social.forEach((item) => {
      expect(item.icon).toBeDefined();
      expect(item.icon.length).toBeGreaterThan(0);
    });
  });

  it("contact items have icons", () => {
    PROFILE.contact.forEach((item) => {
      expect(item.icon).toBeDefined();
      expect(item.icon.length).toBeGreaterThan(0);
    });
  });
});
