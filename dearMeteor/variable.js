'use strict'

let adacode = '.io'
console.log(adacode); //print

const code = 23

for(var i=0;i<3;i++){
  console.log(i);
}
console.log('i out scope '+i);

for (let k = 0; k < 3; k++) {
  console.log('let '+k);
}
console.log(k)
