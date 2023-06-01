const { it, expect } = require("vitest");
const { handler } = require("./app");

it('should return "Hello, World!"', async () => {
  const event = {};
  const context = {};

  const result = await handler(event, context);

  expect(result).toEqual("Hello, World!");
});
it('should return "Hello, Mars!"', async () => {
  const event = {};
  const context = {};

  const result = await handler(event, context);

  expect(result).toEqual("Hello, Mars!");
});
