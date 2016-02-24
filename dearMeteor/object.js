'use strict'
let myObj = {
  name: 'Yean',
  gender: 'male',
  age: 24
  },
  myObj2 = {
    name: 'Donut',
    gender: 'male',
    age: 17
  }

if(myObj.gender === 'male' && myObj.age >= 18)
  console.log('Welcome to gay pub!!!!');
else
  console.log('Go aways');

let objSet = [
  {
    name: 'Yean',
    gender: 'male',
    age: 24
  },
  {
    name: 'Donut',
    gender: 'male',
    age: 17
  },
  {
    name: 'Ada',
    gender: 'male',
    age: 68
  },
]

for(let i=0; i<objSet.length; i++){
  if(objSet[i].gender === 'male' && objSet[i].age >= 18)
    console.log('Welcome!! '+objSet[i].name);
}
