//ES6
//Rest & Spread Operator

function addNumbers(a,b,c,...other){
  console.log(other);
  //console.log(arguments);
  return a+b+c;
}

const res=addNumbers(10,20,30,40,50);

console.log(res);

//Spread
var names=["basha","khadar","nagoor","nawaz"];

function getNames(name1,name2,name3){
  console.log(name1,name2,name3);
}

getNames(...names);

//Object ke Sath -> Rest
var students={
  name:"Khadar",
  age:"36",
  hobbies:["Cricket","Listening Music"]
}

const {...rest}=students;
console.log(rest);

//Spread
var newStudent={
  ...students
}
console.log(newStudent);