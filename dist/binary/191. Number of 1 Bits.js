"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numberOfOneBits = (x) => {
    if (!x)
        return 0;
    let ones = x.toString(2).match(/1/g).length;
    return ones;
};
exports.numberOfOneBits = numberOfOneBits;
console.log(numberOfOneBits(parseInt("00000000000000000000000010000000", 2)));
//# sourceMappingURL=191. Number of 1 Bits.js.map