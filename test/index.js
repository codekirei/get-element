'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
// npm
const assert = require('chai').assert
const Nightmare = require('nightmare')
const express = require('express')
const serve = require('serve-static')

//----------------------------------------------------------
// tests
//----------------------------------------------------------
let nightmare

describe('get-element', () => {
  // set up server
  const fixture = 'http://localhost:1337'
  before(() => {
    express()
      .use(serve('test/fixtures'))
      .listen(1337)
  })

  // set up nightmare
  beforeEach(() => {
    nightmare = new Nightmare()
  })
  afterEach(cb => {
    return nightmare
      .end()
      .then(() => cb())
  })


  describe('get elements by class', () => {
    describe('from document', () => {
      const cases = {
        none: 0,
        one: 1,
        two: 2
      }

      Object.keys(cases).map(key => {
        it(`case: ${key}`, cb => {
          return nightmare
            .goto(fixture)
            .evaluate(_ => getElement.withClass(_), key)
            .then(res => {
              assert.equal(cases[key], res.length)
              cb()
            })
        })
      })
    })

    describe('from element', () => {
      it('no matches')
      it('single match')
      it('multiple matches')
    })
  })

  describe('get elements by tag', () => {
    describe('from document', () => {
      it('no matches')
      it('single match')
      it('multiple matches')
    })

    describe('from element', () => {
      it('no matches')
      it('single match')
      it('multiple matches')
    })
  })
})
/* globals getElement */
