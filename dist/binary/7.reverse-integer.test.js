"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const _7_reverse_integer_1 = require("./7.reverse-integer");
describe("7. Reverse Integer", () => {
    it("Input: 123, Output: 321", () => {
        const expected = 321;
        const input = 123;
        const rev = _7_reverse_integer_1.reverse(input);
        assert_1.default.equal(rev, expected);
    });
    it("Input: -123, Output: -321", () => {
        const expected = -321;
        const input = -123;
        const rev = _7_reverse_integer_1.reverse(input);
        assert_1.default.equal(rev, expected);
    });
    it("Input: 120, Output: 21", () => {
        const expected = 21;
        const input = 120;
        const rev = _7_reverse_integer_1.reverse(input);
        assert_1.default.equal(rev, expected);
    });
    it("Input: 99999999999, Output: 0", () => {
        const expected = 0;
        const input = 99999999999;
        const rev = _7_reverse_integer_1.reverse(input);
        assert_1.default.equal(rev, expected);
    });
});
//# sourceMappingURL=7.reverse-integer.test.js.map