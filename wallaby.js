module.exports = function() {
  return {
    files: ['src/**/*.ts', 'jest.json', '!src/**/*.spec.ts'], // <--
    tests: ['src/**/*.spec.ts'],
    env: { type: 'node', runner: 'node' },
    testFramework: 'jest',
    setup: function(wallaby) {
      var jestConfig = require('./jest.json').jest;
      wallaby.testFramework.configure(jestConfig);
    },
  };
};
