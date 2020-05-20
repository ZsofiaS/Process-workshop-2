'use strict';

class Kata {
  get_middle(word){
    var middleLetter = Math.ceil(word.length/2);
    return word.substring(middleLetter-1, middleLetter);
  }
}
