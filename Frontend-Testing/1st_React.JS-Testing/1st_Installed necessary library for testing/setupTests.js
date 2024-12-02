
// why setupTests.js

/* 
Create a Setup File for Global Configurations (Optional)
If you want to add custom global setup, like extending assertions with jest-dom, you can create a setupTests.js file. This file is optional but useful for initializing custom global configurations.

Create a new file called setupTests.js in the root of your project:

import '@testing-library/jest-dom'; // For extended matchers like `toBeInTheDocument()`

This will automatically be imported before each test, so you don’t have to import it manually in every test file.

Why Create a setupTests.js File?
The main purpose of the setupTests.js file is to configure global setup for your tests. This file is useful for setting up things that you want to be available to all your test files, without needing to import them manually in each individual test.

When you work with React Testing Library and Vitest (or Jest), there are some libraries that provide custom matchers or global configurations that you may want to use in every test. Instead of importing those libraries in every single test file, you can configure them once in the setupTests.js file, and they will be applied globally to all your tests.

jsdom simulates a browser environment for your tests (it provides the DOM and other browser APIs that your React components need).
@testing-library/jest-dom adds custom matchers for DOM-related assertions to make your tests more readable and maintainable.
*/

import '@testing-library/jest-dom';