"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const _190__Reverse_Bits_1 = require("./190. Reverse Bits");
describe("190. Reverse Bits", () => {
    it("Input: 00111001011110000010100101000000, Output: 10111111111111111111111111111111", () => {
        const expected = parseInt("00111001011110000010100101000000", 2);
        const input = parseInt("00000010100101000001111010011100", 2);
        const rev = _190__Reverse_Bits_1.reverseBits(input);
        assert_1.default.equal(rev, expected);
    });
    it("Input: 00111001011110000010100101000000, Output: 10111111111111111111111111111111", () => {
        const expected = parseInt("11111111111111111111111111111101", 2);
        const input = parseInt("10111111111111111111111111111111", 2);
        const rev = _190__Reverse_Bits_1.reverseBits(input);
        assert_1.default.equal(rev, expected);
    });
    it("Input: 00000010100101000001111010011100, Output: 00111001011110000010100101000000", () => {
        const input = parseInt("00000010100101000001111010011100", 2);
        const expected = parseInt("00111001011110000010100101000000", 2);
        const rev = _190__Reverse_Bits_1.reverseBits(input);
        assert_1.default.equal(rev, expected);
    });
});
//# sourceMappingURL=190. Reverse Bits.test.js.map