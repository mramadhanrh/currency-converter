module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.jsx', 'pages/**/*.js', 'pages/**/*.jsx'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  modulePathIgnorePatterns: ['node_modules']
};
