"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let totalHammingDistance = function (nums) {
    let ans = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        let x = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            let y = nums[j];
            ans += getHammingDistance(x, y);
        }
    }
    ;
    return ans;
};
exports.totalHammingDistance = totalHammingDistance;
function getHammingDistance(x, y) {
    let res = 0;
    let xor = x ^ y;
    while (xor > 0) {
        if (xor % 2 === 1)
            res++;
        xor = xor >> 1;
    }
    return res;
}
//# sourceMappingURL=477. Total Hamming Distance.js.map