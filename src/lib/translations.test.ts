import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { translations } from "./translations";

describe("professional timeline dates", () => {
  test("court employment is dated 2025–2026 in both languages", () => {
    assert.equal(translations.en.about.background[5].period, "2025 – 2026");
    assert.equal(translations.lt.about.background[5].period, "2025 – 2026");
  });

  test("current corporate work starts in 2026", () => {
    assert.equal(translations.en.about.background[6].period, "2026 – Present");
    assert.equal(translations.lt.about.background[6].period, "2026 – dabar");
  });
});