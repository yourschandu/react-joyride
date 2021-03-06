module.exports = {
  rootDir: '../',
  transform: {
    '.*': '<rootDir>/node_modules/babel-jest',
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
  ],
  moduleDirectories: [
    'node_modules',
    'src',
    './',
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': '<rootDir>/test/__setup__/styleMock.js',
    '^(.+\\.(jpe?g|png|gif|ttf|eot|svg|md)|bootstrap.*)$': '<rootDir>/test/__setup__/fileMock.js',
  },
  setupFiles: [
    '<rootDir>/test/__setup__/shim.js',
    '<rootDir>/test/__setup__/index.js',
  ],
  testRegex: '/test/.*?\\.(test|spec)\\.js$',
  collectCoverage: false,
  collectCoverageFrom: [
    'app/scripts/**/*.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    },
  },
  verbose: true,
};
