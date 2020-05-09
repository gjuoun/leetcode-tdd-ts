"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverse = (x) => {
    if (!x)
        return 0;
    let stack = x.toString().split('');
    let arr = [];
    while (stack.length) {
        arr.push(stack.pop());
    }
    const result = parseInt(arr.join(''));
    if (result < -(Math.pow(2, 31)) || result > Math.pow(2, 31) - 1)
        return 0;
    return x > 0 ? result : -result;
};
exports.reverse = reverse;
//# sourceMappingURL=7.reverse-integer.js.map