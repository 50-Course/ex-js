module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['clover', 'json', 'lcov', ['text', { skipFull: true }]],
  testEnvironment: 'node',
}
