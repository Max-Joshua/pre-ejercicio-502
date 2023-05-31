const { handler } = require('./A01025250/index');
describe('handler', () => {
  it('should return a successful response with a greeting message', async () => {
    const event = { /* Your test event object */ };
    const response = await handler(event);

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual({ message: 'Hello friend' });
  });

  it('should handle errors and return an error response', async () => {
    const event = { /* Your test event object */ };
    // Mocking an error by throwing an exception
    jest.spyOn(console, 'log').mockImplementation(() => {
      throw new Error('Mocked error');
    });

    const response = await handler(event);

    expect(response.statusCode).toBe(500);
    expect(JSON.parse(response.body)).toEqual({ error: 'An error occurred' });
  });
});