"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const _461__Hamming_Distance_1 = require("./461. Hamming Distance");
describe("461. Hamming Distance", () => {
    it("Input: x=1, y=4, Output: 2", () => {
        let x = 1, y = 4;
        const expected = 2;
        const rev = _461__Hamming_Distance_1.hammingDistance(x, y);
        assert_1.default.equal(rev, expected);
    });
    it("Input: x=8, y=8, Output: 0", () => {
        let x = 8, y = 8;
        const expected = 0;
        const rev = _461__Hamming_Distance_1.hammingDistance(x, y);
        assert_1.default.equal(rev, expected);
    });
});
//# sourceMappingURL=461. Hamming Distance.test.js.map