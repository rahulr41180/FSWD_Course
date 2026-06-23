import '@testing-library/jest-dom'

/* 
does NOT import a variable/function for direct use.

Instead, it runs the library once and extends the global expect() with extra DOM matchers.

What Happens Internally?

When this file executes:

import '@testing-library/jest-dom'

internally it does something similar to:

expect.extend({
  toBeInTheDocument,
  toBeVisible,
  toHaveTextContent,
  toBeDisabled,
  ...
})

So now Vitest/Jest understands:

expect(element).toBeInTheDocument()

Why setupTests.ts?

Because you want these matchers available globally for ALL test files.

Instead of writing:

import '@testing-library/jest-dom'

inside every test file.

*/