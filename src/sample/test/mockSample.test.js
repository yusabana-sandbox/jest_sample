describe('mockSample', () => {
  jest.mock('../sample')
  const sample = require('../sample').default

  sample.mockImplementation(() => 42)

  test('sample', () => {
    expect(sample()).toBe(42)
    expect(sample()).not.toBe(2)
  })
})
