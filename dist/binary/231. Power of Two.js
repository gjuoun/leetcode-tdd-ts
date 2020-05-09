"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPowerOfTwo = (x) => {
    if (x <= 0)
        return false;
    return x.toString(2).match(/1/g).length === 1;
};
exports.isPowerOfTwo = isPowerOfTwo;
//# sourceMappingURL=231. Power of Two.js.map