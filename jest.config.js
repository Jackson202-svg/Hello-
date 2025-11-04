/**
 * Jest Configuration
 * This file defines settings for the Jest JavaScript testing framework.
 * Since this is a simple static HTML project, this serves as a placeholder
 * to show where unit testing configurations would live if we added more complex JavaScript.
 */
module.exports = {
  // Test environment: JSDOM simulates a browser environment for front-end tests
  testEnvironment: 'jsdom',
  
  // File extensions Jest should look for
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  
  // Directories to search for test files
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  
  // Custom module name mapper for handling static assets (e.g., images)
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

  // Coverage settings
  collectCoverage: true,
  collectCoverageFrom: [
    'index.html', // Target the JS logic inside index.html for basic coverage
  ],
  coverageDirectory: 'coverage',
};
