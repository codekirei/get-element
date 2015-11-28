'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
// npm
require('mocha-generators').install()
const assert = require('chai').assert
const Nightmare = require('nightmare')
const express = require('express')
const serve = require('serve-static')

//----------------------------------------------------------
// tests
//----------------------------------------------------------
// silence warning
process.setMaxListeners(0)

describe('get-element', () => {
  // set up server
  const fixture = 'http://localhost:1337'
  before(() => {
    express()
      .use(serve('test/fixtures'))
      .listen(1337)
  })

  // set up nightmare
  let nightmare
  beforeEach(() => {
    nightmare = new Nightmare()
  })
  afterEach(cb => {
    return nightmare
      .end()
      .then(() => cb())
  })

  // helper function
  function runTests(cases, func) {
    cases.map(testCase => {
      it(`case: ${testCase}`, function* () {
        const result = yield nightmare
          .goto(fixture)
          .evaluate(func, testCase)
        assert.isArray(result)
        assert.equal(cases.indexOf(testCase), result.length)
      })
    })
  }

  describe('get elements by class', () => {
    describe('from document', () => {
      runTests(
        ['none', 'one', 'two'],
        testClass => getElement.withClass(testClass)
      )
    })

    describe('from element', () => {
      runTests(
        ['none', 'root__one', 'root__two'],
        testClass => {
          const root = getElement.withClass('root')[0]
          return getElement.withClass(testClass, root)
        }
      )
    })
  })

  describe('get elements by tag', () => {
    describe('from document', () => {
      runTests(
        ['p', 'html', 'article'],
        testTag => getElement.withTag(testTag)
      )
    })

    describe('from element', () => {
      runTests(
        ['p', 'span', 'div'],
        testTag => {
          const root = getElement.withClass('root')[0]
          return getElement.withTag(testTag, root)
        }
      )
    })
  })

  describe('browserify', () => {
    it('by class from document', function* () {
      const result = yield nightmare
        .goto(fixture)
        .evaluate(() => {
          var b = require('bGetElement')
          return b.withClass('two')
        })
      assert.equal(2, result.length)
    })
    it('by tag from element', function* () {
      const result = yield nightmare
        .goto(fixture)
        .evaluate(() => {
          var b = require('bGetElement')
          var root = b.withClass('root')[0]
          return b.withTag('div', root)
        })
      assert.equal(2, result.length)
    })
  })

  describe('webpack', () => {
    it('by class from document', function* () {
      const result = yield nightmare
        .goto(fixture)
        .evaluate(() => {
          return wGetElement.withClass('two')
        })
      assert.equal(2, result.length)
    })

    it('by tag from element', function* () {
      const result = yield nightmare
        .goto(fixture)
        .evaluate(() => {
          const root = wGetElement.withClass('root')[0]
          return wGetElement.withTag('div', root)
        })
      assert.equal(2, result.length)
    })
  })
})

/* globals getElement */
