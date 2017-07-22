import render from '../render.js'

describe('toMatchSnapshot example', () => {
  test('render', () => {
    expect(render()).toMatchSnapshot()
  })
})
