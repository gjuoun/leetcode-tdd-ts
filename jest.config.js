module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src/slidingWindow_2"],
  transform: {
    "^.+.ts$": "ts-jest",
  },
  testRegex: "(test|spec).ts$",
  coverageDirectory: "coverage",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
