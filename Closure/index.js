//Closure

//An anonymous function is a function without a name
/*
Self Executing Function
(function () {
   //...
})();


(function(){
    console.log("Self execusion function");
})();

(()=>{
    console.log("Self execustion function (arrow function)");
})();

let Person={'name':'khadar','age':36};
(()=>{
    console.log(`Self execustion function ${Person.name}`);
})(Person);

A closure is a function that references variables in the outer scope from its inner scope. The closure preserves the outer scope inside its inner scope.

To understand the closures, you need to know how the lexical scoping works first.
lexical scoping in JavaScript:
JavaScript uses lexical scoping to resolve the variable names when a function is created inside another function. It determines the function's parent scope by looking at where the function was created instead of where it was invoked.
*/
/* var sum=function(a){
  console.log("Live users :",a);
  var c=30;
  return function(b){
    return a+b+c;
  }
}

var inner=sum(200);
console.log("Total viewrs :",inner(20)); */
var sum=function(a,b,c){

  return {
    getSumTwo:()=>{
      return a+b;
    },
    getSumThree:()=>{
      return a+b+c;
    }
  }
}

var store=sum(3,4,5);

console.log(store.getSumTwo());
console.log(store.getSumThree());