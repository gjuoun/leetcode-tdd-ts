"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hammingDistance1 = function (x, y) {
    let result = 0;
    for (let i = 0; i < 31; i++) {
        //last bit of x
        let bx = x % 2;
        let yx = y % 2;
        if (bx !== yx)
            result++;
        x >>= 1;
        y >>= 1;
    }
    return result;
};
let hammingDistance = function (x, y) {
    let xor = x ^ y;
    let ans = 0;
    while (xor > 0) {
        if (xor % 2)
            ans++;
        xor >>= 1;
    }
    return ans;
};
exports.hammingDistance = hammingDistance;
//# sourceMappingURL=461. Hamming Distance.js.map