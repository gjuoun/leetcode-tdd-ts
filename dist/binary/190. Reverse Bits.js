"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverseBits = (x) => {
    if (!x)
        return 0;
    let stack = x.toString(2).split('');
    // .padStart(32, "0").split('').reverse()
    let arr = [];
    while (arr.length < 32) {
        if (stack.length > 0)
            arr.push(stack.pop());
        else
            arr.push("0");
    }
    return parseInt(arr.join(''), 2);
};
exports.reverseBits = reverseBits;
//# sourceMappingURL=190. Reverse Bits.js.map