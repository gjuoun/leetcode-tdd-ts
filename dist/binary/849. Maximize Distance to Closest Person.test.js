"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _849__Maximize_Distance_to_Closest_Person_1 = require("./849. Maximize Distance to Closest Person");
const expect_1 = __importDefault(require("expect"));
describe("849", () => {
    it("Input: [1,0,0,0,1,0,1], Output: 2", () => {
        const input = [1, 0, 0, 0, 1, 0, 1];
        const output = 2;
        expect_1.default(_849__Maximize_Distance_to_Closest_Person_1.maxDistToClosest(input)).toBe(output);
    });
    it("Input: [1,0,0,0], Output: 3", () => {
        const input = [1, 0, 0, 0];
        const output = 3;
        expect_1.default(_849__Maximize_Distance_to_Closest_Person_1.maxDistToClosest(input)).toBe(output);
    });
    it("Input: [0,1], Output: 1", () => {
        const input = [0, 1];
        const output = 1;
        expect_1.default(_849__Maximize_Distance_to_Closest_Person_1.maxDistToClosest(input)).toBe(output);
    });
    it("Input: [1,0,1 ], Output: 1", () => {
        const input = [1, 0, 1];
        const output = 1;
        expect_1.default(_849__Maximize_Distance_to_Closest_Person_1.maxDistToClosest(input)).toBe(output);
    });
    it("Input: [0,1,1,1,0,0,1,0,0], Output: 2", () => {
        const input = [0, 1, 1, 1, 0, 0, 1, 0, 0];
        const output = 2;
        expect_1.default(_849__Maximize_Distance_to_Closest_Person_1.maxDistToClosest(input)).toBe(output);
    });
    it("Input: [0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0], Output: 3", () => {
        const input = [0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0];
        const output = 3;
        expect_1.default(_849__Maximize_Distance_to_Closest_Person_1.maxDistToClosest(input)).toBe(output);
    });
    it("Input: [1,0,0,1], Output: 3", () => {
        const input = [1, 0, 0, 1];
        const output = 1;
        expect_1.default(_849__Maximize_Distance_to_Closest_Person_1.maxDistToClosest(input)).toBe(output);
    });
});
//# sourceMappingURL=849. Maximize Distance to Closest Person.test.js.map