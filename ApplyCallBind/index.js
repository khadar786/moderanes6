//Apply,Call and Bind in JS

//Problem statement

//Call
/* let userDetails={
      name:"khadar basha",
      age:36,
      designation:"PHP Developer",
      printDetails:function(){
        console.log(this);
      }
};
userDetails.printDetails();

let userDetails2={
  name:"Nagoor basha",
  age:8,
  designation:"Railway"
};
//function borrowing
userDetails.printDetails.call(userDetails2); 

let userDetails={
  name:"khadar basha",
  age:36,
  designation:"PHP Developer"
};

let printDetails=function(){
  console.log(this);
}

printDetails.call(userDetails);

let userDetails2={
name:"Nagoor basha",
age:8,
designation:"Railway"
};
//function borrowing
printDetails.call(userDetails2);*/

//Apply
/* let userDetails={
  name:"khadar basha",
  age:36,
  designation:"PHP Developer"
};

let printDetails=function(city,country){
  console.log(this.name+" "+city+" "+country);
}

printDetails.call(userDetails,"Kakinada","AP");

let userDetails2={
name:"Nagoor basha",
age:8,
designation:"Railway"
};
//function borrowing
printDetails.call(userDetails2,"Kakinada","AP");

let userDetails3={
  name:"Nawaz",
  age:7,
  designation:"Civils"
};
printDetails.apply(userDetails3,["Kakinada","AP"]); */

//Bind