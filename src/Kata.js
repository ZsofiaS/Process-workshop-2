'use strict';

class Kata {
  get_middle(word){
    var middle = Math.ceil(word.length/2);
    if (word.length % 2 !== 0) {
      return word.substring(middle - 1, middle);
    } else {
      return word.substring(middle - 1, middle + 1);
    }
  }
}
