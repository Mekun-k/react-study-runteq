/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  reporters: ["default", ["jest-junit", { outputDirectory: "tmp", outputName: "result.xml", classNameTemplate: "{filepath}" }]],
  globals: {
    'ts-jest': {
      tsconfig: './app/javascript/tsconfig.json',
    },
  },
};
