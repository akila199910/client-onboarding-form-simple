import { describe, it, expect } from "vitest";
import { OnboardSchema, SERVICES } from "./validation";

describe("OnboardSchema", () => {
  const base = {
    fullName: "Ada Lovelace",
    email: "ada@example.com",
    companyName: "Analytical Engines Ltd",
    services: [SERVICES[0]],
    projectStartDate: "2999-01-01",
    acceptTerms: true,
  };

  it("passes with valid data (no budget)", () => {
    const parsed = OnboardSchema.parse(base);
    expect(parsed.fullName).toBe(base.fullName);
    expect(parsed.services.length).toBe(1);
    expect(parsed.budgetUsd).toBeUndefined();
  });

  it("accepts integer budget in range", () => {
    const parsed = OnboardSchema.parse({ ...base, budgetUsd: 500 });
    expect(parsed.budgetUsd).toBe(500);
  });

  it("fails when no services selected", () => {
    const res = OnboardSchema.safeParse({ ...base, services: [] });
    expect(res.success).toBe(false);
    if (!res.success) {
      const msg = res.error.flatten().fieldErrors.services?.[0];
      expect(msg).toMatch(/Select at least one service/i);
    }
  });

  it("fails when acceptTerms is false", () => {
    const res = OnboardSchema.safeParse({ ...base, acceptTerms: false });
    expect(res.success).toBe(false);
  });

  it("fails when start date is in the past", () => {
    const res = OnboardSchema.safeParse({ ...base, projectStartDate: "2000-01-01" });
    expect(res.success).toBe(false);
  });
});
