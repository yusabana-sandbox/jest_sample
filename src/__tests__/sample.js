import sample from '../sample/sample.js'

describe('sample', () => {
  beforeAll(() => {
    console.log('beforeAll')
  })

  beforeEach(() => {
    console.log('beforeEach')
  })

  it('plus one', () => {
    expect(sample(1)).toBe(2)
  })

  test('not', () => {
    expect(sample(1)).not.toBe(1)
  })

})
