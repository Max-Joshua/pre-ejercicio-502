const printName = require('./index.js')
test('Prints salutation', () => {
  expect(printName()).toBe('Hello Juan!')
})
