"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_js_1 = __importDefault(require("../utilities/arrays.js"));
var arr1 = [1, 2, 3, 4, 5];
var arr2 = ["a", "b", "c", "d", "e"];
var arr3 = [1, 2, 3, 4, 5, "a", "b", "c", "d", "e"];
var num = 15;
var num2 = 4;
describe("Tests for `concatArr` function", function () {
    it("expects concatArr(A1,A2) to return concatenated array params", function () {
        expect(arrays_js_1.default.concatArr(arr1, arr2)).toEqual(arr3);
    });
});
describe("Tests for `addArr` function", function () {
    it("expects to return sum of nums in given array", function () {
        expect(arrays_js_1.default.addArr(arr1)).toEqual(num);
    });
});
describe("Tests for `lgNum` function", function () {
    it("expects to return largest nums in given array", function () {
        expect(arrays_js_1.default.lgNum(arr1)).toBeGreaterThan(num2);
    });
});
describe("Tests for `cut3` function", function () {
    var arr4 = [1, 2, 4, 5];
    it("expects to return given array - 3rd element", function () {
        expect(arrays_js_1.default.cut3(arr1)).toEqual(arr4);
    });
});
