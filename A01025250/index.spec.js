import {handler} from './index';


describe("Lambda Handler", () => {
  test("should return a successful response with a message", async () => {
    // Mocking the event object
    const event = {
      // Provide any necessary properties for your test case
    };

    // Invoke the Lambda handler
    const response = await handler(event);

    // Assertion
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(JSON.stringify({ message: "Hello friend" }));
  });

  test("should return an error response when an error occurs", async () => {
    // Mocking the event object
    const event = {
      // Provide any necessary properties for your test case
    };

    // Mocking an error occurring in the Lambda handler
    jest.spyOn(console, "log").mockImplementation(() => {
      throw new Error("Mocked error");
    });

    // Invoke the Lambda handler
    const response = await handler(event);

    // Assertion
    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual(
      JSON.stringify({ error: "An error occurred" })
    );

    // Restoring the original console.log implementation
    console.log.mockRestore();
  });
});
