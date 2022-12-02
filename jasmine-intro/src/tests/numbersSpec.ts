import _ from "../utilities/numbers.js";

const num1 = 2;
const num2 = 4;
const num3 = 8

describe("Tests for `multiply` function", function () {
  it("expects multiply(2,2) = 4", function () {
    expect(_.multiply(num1, num1)).toBeCloseTo(num2);
  });
});

describe("Tests for `subtract` function", function () {
  it("expects subtract(4,2) = 2", function () {
    expect(_.subtract(num2, num1)).toEqual(num1);
  });
});

describe("Tests for `divide` function", function () {
  it("expects divide(4,2) = 2", function () {
    expect(_.divide(num2, num1)).toEqual(num1);
  });
});

describe("Tests for `square` function", function () {
  it("expects square(2) = 4", function () {
    expect(_.square(num1)).toEqual(num2);
  });
});

describe("Tests for `sum` function", function () {
  it("expects sum(2) = 4", function () {
    expect(_.sum(num1, num1)).toEqual(num2);
  });
});
