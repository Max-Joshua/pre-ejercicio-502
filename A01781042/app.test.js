import { it, expect, request } from "vitest";

it('should respond with "Hello World" on GET "/"', async () => {
  const response = await request(server).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello World");
});
it('should respond with "Hello Mars" on GET "/"', async () => {
  const response = await request(server).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello Mars");
});
