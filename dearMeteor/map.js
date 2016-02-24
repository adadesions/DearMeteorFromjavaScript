'use strict'

const myArray = [1,2,3,4]
const multiple10 = (x) => x*10
const multiple100 = (x) => x*100
const plus5 = (x) => x+5
const sum = (x,y) => x+y

let newArray = myArray.map(multiple10) //1 <--- Semantic
// let newArray = myArray.map(x => x*10)  //2
console.log(newArray);

//Working with object
let myObj = [
  {id:0, type:'human'},
  {id:1, type:'human'},
  {id:2, type:'robot'},
]
const findHuman = (x) => {
  return x.type === 'human' ? x : ''
}
const findRobot = (x) => {
  return x.type === 'robot' ? x : ''
}

let onlyHuman = myObj.map(findHuman),
    onlyRobot = myObj.map(findRobot)

console.log(onlyRobot);
