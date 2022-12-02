import _ from "../utilities/strings";

const str1 = "APPLE";
const str2 = "apple";
const str3 = "Apple";
const str4 = "APPLEapple";

describe("Tests for `capitalize` function", function () {
  it("expects capitalize(`apple`) = `Apple`", function () {
    expect(_.capitalize(str2)).toMatch(str3);
  });
});

describe("Tests for `addconcatArr` function", function () {
  it("expects concat(s1,s2) return concatenated args", function () {
    expect(_.concat(str1, str2)).toContain(str4);
  });
});

describe("Tests for `lowerCase` function", function () {
  it("expects lowerCase(`APPLE`) = `apple`", function () {
    expect(_.lowerCase(str1)).toMatch(str2);
  });
});

describe("Tests for `upperCase` function", function () {
  it("expects upperCase(`apple`) = `APPLE` ", function () {
    expect(_.upperCase(str2)).toMatch(str1);
  });
});
