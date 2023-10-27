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

for(let v of setobj){
  console.log(v);
}

setobj.forEach((ele)=>{
  console.log(ele);
});

//Map -> key -> values
let myMap=new Map([["a1","khadar"],["a2","basha"]]);
myMap.set("a3","sayyad");

console.log(myMap);
console.log(myMap.get("a2"));

for([key,value] of myMap){
  console.log(`keys ${key},value ${value}`);
}

console.log("||||||||||||||||||||||||||||");
myMap.forEach((ele,key)=>{
  console.log(`keys ${key},value ${ele}`);
});

//WeakSet
//only store objects
//it cann't be iterated
let ws=new WeakSet();
var obj3={"name":"Tiger"};
var obj4={};
ws.add(obj3);
ws.add(obj4);
ws.delete(obj3);
console.log(ws.has(obj3));

//WeakMap
let wm=new WeakMap();
var obj5={"name":"khadar"};
var obj6={};
wm.set(obj5,"Private");
wm.set(obj6,"Private");
console.log(wm);