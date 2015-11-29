jest.dontMock('../index')

describe('get-element', () => {
  it('get elements by class from document', () => {
    const el = require('../index')
    document.body.innerHTML = `
      <div class="one"></div>
      <div></div>
    `
    expect(el.withClass('one').length).toEqual(1)
    expect(el.withTag('div').length).toEqual(2)
  })
  it('include inline', () => {
    document.body.innerHTML = `
      <script src="index.js"></script>
    `
    // const module = undefined
    const el = require('../index')
    console.log(el)
    expect(document.body.innerHTML.getElement.withTag('script').length).toEqual(1)
  })
})

/* globals jest, expect */
