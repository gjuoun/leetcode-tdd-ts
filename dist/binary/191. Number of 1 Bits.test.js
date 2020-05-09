"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const _191__Number_of_1_Bits_1 = require("./191. Number of 1 Bits");
describe("191. Number of 1 Bits", () => {
    it("Input: 00000000000000000000000000001011, Output: 3", () => {
        const input = parseInt("00000000000000000000000000001011", 2);
        const expected = 3;
        const rev = _191__Number_of_1_Bits_1.numberOfOneBits(input);
        assert_1.default.equal(rev, expected);
    });
    it("Input: 00000000000000000000000010000000, Output: 1", () => {
        const input = parseInt("00000000000000000000000010000000", 2);
        const expected = 1;
        const rev = _191__Number_of_1_Bits_1.numberOfOneBits(input);
        assert_1.default.equal(rev, expected);
    });
    it("Input: 11111111111111111111111111111101, Output: 31", () => {
        const input = parseInt("11111111111111111111111111111101", 2);
        const expected = 31;
        const rev = _191__Number_of_1_Bits_1.numberOfOneBits(input);
        assert_1.default.equal(rev, expected);
    });
});
//# sourceMappingURL=191. Number of 1 Bits.test.js.map