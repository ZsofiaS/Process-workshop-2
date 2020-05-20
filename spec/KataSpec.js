'use strict';

describe('Kata', function() {
  var kata;

  beforeEach(function() {
    kata = new Kata();
  })
  it('returns t when given the word testing', function() {
    expect(kata.get_middle('testing')).toEqual('t');
  })

})
