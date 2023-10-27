//Map, Set, WeakMap & WeakSet in JavaScript
//"use strict"
//Set
//It contains unique values
//Object constructor

let myArray=[1,2,3,5];
let setobj=new Set(myArray);
console.log(setobj.size);
setobj.add(5);

setobj.delete(5);
console.log(setobj);

var obj1={
  name:"khadar"
};
setobj.add(obj1);
console.log(setobj);
//setobj.clear();
//console.log(setobj);
console.log(setobj.has(1))

for(let v of obj1){
  console.log(v);
}
//map -> key -> values
