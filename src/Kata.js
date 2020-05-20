'use strict';

class Kata {
  get_middle(word){
    var middleLetter = Math.ceil(word.length/2);
    console.log(middleLetter);
    if (word.length % 2 !== 0) {
      return word.substring(middleLetter - 1, middleLetter);
    } else {
      return word.substring(middleLetter - 1, middleLetter + 1);
    }
  }
}
