const { handler } = require("./index.js");

describe("Lambda handler", () => {
  it("should return the correct response", async () => {
    const mockEvent = {}; // Fill this in with a representative event object, if necessary
    const mockContext = {}; // Fill this in with a representative context object, if necessary

    const expectedResponse = {
      statusCode: 200,
      body: JSON.stringify("Hello World!"),
    };

    const response = await handler(mockEvent, mockContext);

    expect(response).toEqual(expectedResponse);
  });
});
