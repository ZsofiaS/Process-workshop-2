'use strict';

describe('Kata', function() {
  var kata;

  it('returns t when given the word testing', function() {
    kata = new Kata();
    expect(kata.get_middle('testing')).toEqual('t');
  })
})
