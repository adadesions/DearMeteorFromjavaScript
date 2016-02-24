'use strict'
//1st function declaration

const plus2 = function (x) { return x+2}

let ada = plus2(5)
console.log(ada); //7
console.log(plus5(ada)); //12

//2nd, Hoisting แปลว่า ยกขึ้น
function plus5(x) {
  return x+5
}
