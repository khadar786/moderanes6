//Prototypes in JavaScript | Object Prototype In JavaScript

/* const obj=new Object({
  name:"khadar"
}); 

const obj=new Object();
obj={
  name:"khadar"
}*/

//All JavaScript objects inherit properties and methods from a prototype.
//Date objects inherit from Date.prototype
//Array objects inherit from Array.prototype
//Person objects inherit from Person.prototype

//The Object.prototype is on the top of the prototype inheritance chain:
//Date objects, Array objects, and Person objects inherit from Object.prototype.

//__proto__
//The standard way to access an object's prototype is the Object.getPrototypeOf() method

const obj1={
  name:"khadar",
  getName:function(){
    return this.name
  },
  getRoll:function(){
    return this.roll;
  }
}
console.log(obj1);

const obj2={
  roll:1,
  name:"basha",
  __proto__:obj1
}


const obj3={
  class:"MCA",
  __proto__:obj2
}
console.log(obj2.name);
console.log(obj2.getName());
console.log(obj2.getRoll());
console.log(Object.getPrototypeOf(obj2))

console.log(obj3);

const array=["khadar"];
console.log(array);

const object=new Object();
console.log(object);

const arrobject=new Array();
console.log(arrobject);

Array.prototype.show=function(){
 return this; 
}

const cities=["kakinada","Rajy"]
console.log(cities.show())

Array.prototype.convertIntoObject=function(){
  let newObject={};
  this.forEach((element)=>{
    newObject[element]=element;
  });

  return newObject;
}

console.log(cities.convertIntoObject());

function MyPrototype(name,roll){
  this.name=name;
  this.roll=roll;
}

MyPrototype.prototype=obj1;

const myprototype=new MyPrototype("khadar",21);
console.log(myprototype);
console.log(myprototype.getName());
console.log(myprototype.getRoll());