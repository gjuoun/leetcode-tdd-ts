module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\.ts$": "ts-jest",
  },
  testRegex: "(test|spec)\.ts$",
  coverageDirectory: "coverage",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
