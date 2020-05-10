"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let totalHammingDistance = function (nums) {
    let ans = 0;
    let mask = 1;
    for (let i = 0; i < 32; i++) {
        let ones = 0, zeros = 0;
        for (let num of nums) {
            if ((num & mask)) {
                ones++;
            }
        }
        zeros = nums.length - ones;
        ans += zeros * ones;
        mask = mask << 1;
    }
    ;
    return ans;
};
exports.totalHammingDistance = totalHammingDistance;
//# sourceMappingURL=477. Total Hamming Distance.js.map