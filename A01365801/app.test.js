// test.js

// Import the function to be tested
import { it, expect } from 'vitest';
const { handler } = require('./app');
// Define the unit test
// eslint-disable-next-line no-undef
it('should return "Hello, World!"', async () => {
  // Create a mock event and context
  const event = {};
  const context = {};

  // Call the handler function
  const result = await handler(event, context);

  // Assert the expected result
  // eslint-disable-next-line no-undef
  expect(result).toEqual('Hello, World!');
});
