import {
  composeArticleSlug,
  cutTextToLength,
  extractArticleIdFromSlug,
  slugify,
} from "..";

const str = "The quick brown fox jumps over the lazy dog.";

describe("cutTextToLength", () => {
  it("should cut text to length", () => {
    expect(cutTextToLength(str, 20)).toBe("The quick brown fox ...");
    expect(cutTextToLength(str, 21)).toBe("The quick brown fox j...");
  });

  it("should not cut text to length", () => {
    expect(cutTextToLength(str, 100)).toBe(str);
  });
});

describe("slugify", () => {
  it("to lower case", () => {
    expect(slugify("Melmii Teniim")).toBe("melmii-teniim");
  });
});

describe("composeArticleSlug", () => {
  it("Compose article", () => {
    expect(composeArticleSlug(1900, "Melmii Teniim")).toBe(
      "melmii-teniim-1900"
    );
  });
});

describe("extract", () => {
  it("extract article", () => {
    expect(extractArticleIdFromSlug("Melmii-Teniim")).toBe("Teniim");
  });
});
