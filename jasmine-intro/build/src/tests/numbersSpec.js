"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var numbers_js_1 = __importDefault(require("../utilities/numbers.js"));
var num1 = 2;
var num2 = 4;
var num3 = 8;
describe("Tests for `multiply` function", function () {
    it("expects multiply(2,2) = 4", function () {
        expect(numbers_js_1.default.multiply(num1, num1)).toBeCloseTo(num2);
    });
});
describe("Tests for `subtract` function", function () {
    it("expects subtract(4,2) = 2", function () {
        expect(numbers_js_1.default.subtract(num2, num1)).toEqual(num1);
    });
});
describe("Tests for `divide` function", function () {
    it("expects divide(4,2) = 2", function () {
        expect(numbers_js_1.default.divide(num2, num1)).toEqual(num1);
    });
});
describe("Tests for `square` function", function () {
    it("expects square(2) = 4", function () {
        expect(numbers_js_1.default.square(num1)).toEqual(num2);
    });
});
describe("Tests for `sum` function", function () {
    it("expects sum(2) = 4", function () {
        expect(numbers_js_1.default.sum(num1, num1)).toEqual(num2);
    });
});
