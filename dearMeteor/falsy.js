'use strict'

let bool = false,
    undef = undefined,
    nullString = '',
    zero = 0,
    nullVar = null,
    notANumber = NaN

  if(bool) console.log('A');
  else if(undef) console.log('B');
  else if(nullString) console.log('C');
  else if(zero) console.log('D');
  else if(nullVar) console.log('E');
  else if(notANumber) console.log('F');
  else console.log('AdaCode');
