export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@constants/(.*)$": "<rootDir>/src/shared/constants/$1",
    "^@hooks/(.*)$": "<rootDir>/src/shared/hooks/$1",
    "^@utils/(.*)$": "<rootDir>/src/shared/utils/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  //   collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,ts,tsx}", "!src/**/*.d.ts", "!src/**/*.test.{js,ts,tsx}"],
  coverageDirectory: "coverage",
};
