"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const _231__Power_of_Two_1 = require("./231. Power of Two");
describe("231. Power of Two", () => {
    it("Input: 1, Output: true", () => {
        const input = 1;
        const expected = true;
        const rev = _231__Power_of_Two_1.isPowerOfTwo(input);
        assert_1.default.equal(rev, expected);
    });
    it("Input: 16, Output: true", () => {
        const input = 16;
        const expected = true;
        const rev = _231__Power_of_Two_1.isPowerOfTwo(input);
        assert_1.default.equal(rev, expected);
    });
    it("Input: 218, Output: false", () => {
        const input = 218;
        const expected = false;
        const rev = _231__Power_of_Two_1.isPowerOfTwo(input);
        assert_1.default.equal(rev, expected);
    });
    it("Input: 0, Output: false", () => {
        const input = 0;
        const expected = false;
        const rev = _231__Power_of_Two_1.isPowerOfTwo(input);
        assert_1.default.equal(rev, expected);
    });
    it("Input: -16, Output: false", () => {
        const input = -16;
        const expected = false;
        const rev = _231__Power_of_Two_1.isPowerOfTwo(input);
        assert_1.default.equal(rev, expected);
    });
});
//# sourceMappingURL=231. Power of Two.test.js.map