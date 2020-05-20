'use strict';

describe('Kata', function() {
  var kata;

  beforeEach(function() {
    kata = new Kata();
  })
  it('returns t when given the word testing', function() {
    expect(kata.get_middle('testing')).toEqual('t');
  })
  it('returns es when given the word test', function() {
    expect(kata.get_middle('test')).toEqual('es');
  })
})
