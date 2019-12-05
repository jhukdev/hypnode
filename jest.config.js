/* -----------------------------------
 *
 * Jest
 *
 * -------------------------------- */

module.exports = {
   testEnvironment: 'jsdom',
   globals: { __DEV__: true },
   roots: ['<rootDir>'],
   collectCoverage: true,
   collectCoverageFrom: ['src/**/*.{ts,tsx}'],
   coverageDirectory: 'tests/coverage',
   coveragePathIgnorePatterns: ['/node_modules/', '(.*).d.ts'],
   coverageThreshold: {
      global: {
         statements: 97,
         branches: 91,
         functions: 93,
         lines: 98,
      },
   },
   transform: {
      '^.+\\.tsx?$': 'ts-jest',
   },
};
