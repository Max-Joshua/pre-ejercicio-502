//Unit Test
const request = require("supertest");
const app = require("./app");

let server;

beforeAll((done) => {
  server = app.listen(8080, () => {
    console.log("Server is running on port 8080");
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe("Test Node.js app endpoints", () => {
  it('should respond with "Hello World" on GET "/"', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World");
  });

  it('should respond with "Hello Mars" on GET "/hello-mars"', async () => {
    const response = await request(app).get("/hello-mars");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello Mars");
  });
});
