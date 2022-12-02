"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var strings_1 = __importDefault(require("../utilities/strings"));
var str1 = "APPLE";
var str2 = "apple";
var str3 = "Apple";
var str4 = "APPLEapple";
describe("Tests for `capitalize` function", function () {
    it("expects capitalize(`apple`) = `Apple`", function () {
        expect(strings_1.default.capitalize(str2)).toMatch(str3);
    });
});
describe("Tests for `addconcatArr` function", function () {
    it("expects concat(s1,s2) return concatenated args", function () {
        expect(strings_1.default.concat(str1, str2)).toContain(str4);
    });
});
describe("Tests for `lowerCase` function", function () {
    it("expects lowerCase(`APPLE`) = `apple`", function () {
        expect(strings_1.default.lowerCase(str1)).toMatch(str2);
    });
});
describe("Tests for `upperCase` function", function () {
    it("expects upperCase(`apple`) = `APPLE` ", function () {
        expect(strings_1.default.upperCase(str2)).toMatch(str1);
    });
});
