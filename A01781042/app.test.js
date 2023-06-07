//Unit Testing

const { handler } = require("./app");

describe("Lambda function", () => {
  it("should return a valid response", async () => {
    const event = {}; // Add any event data you want to test with

    const response = await handler(event);

    expect(response).toBeDefined();
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe(JSON.stringify("Hello from Mars Lambda!"));
  });
});
