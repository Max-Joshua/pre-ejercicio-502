const { handler } = require('.')

describe('Lambda works', () => {
  it('should return a message', async () => {
    const event = { id: 2 }
    const res = await handler(event)
    expect(res).toEqual({
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Hello, World!',
      }),
    })
  })
})
