import { describe, expect, test } from "bun:test";
import { translations } from "./translations";

describe("professional timeline dates", () => {
  test("court employment is dated 2025–2026 in both languages", () => {
    expect(translations.en.about.background[5].period).toBe("2025 – 2026");
    expect(translations.lt.about.background[5].period).toBe("2025 – 2026");
  });

  test("current corporate work starts in 2026", () => {
    expect(translations.en.about.background[6].period).toBe("2026 – Present");
    expect(translations.lt.about.background[6].period).toBe("2026 – dabar");
  });
});