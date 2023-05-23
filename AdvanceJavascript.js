//recusrsion
function pow(x,y){
  let result = 1;
  for (let i = 0; i < y; i++){
    result *= x;
  }
  return result;
}

console.log(pow(3, 4));

// RestParameters
function sumAll(...args) { 
  let sum = 0;
 
  for (let arg of args) sum += arg;
 
  return sum;
}
 
console.log(sumAll(1, 2, 3))

// clouser
function getFunc() {
  let value = "test";
 
  let func = new Function(console.log(value));
  return func;
}
 
getFunc()();


function sayHi(a) {
  console.log("Hi");
}
//name property 
console.log(sayHi.name);
//length property
console.log(sayHi.length)


//Functions
//Function = is cunstroctor 
//function = means methods
let sum = new Function('a', 'b', 'return a+b');
// let sum = new Function('a', 'b', 'return a + b');
console.log(sum(45,07))


//SetTimeOut

function sayHi1(){
  console.log("Hello")
}

// setTimeout(sayHi1, 5000);
let user = {
  firstName: "John",
  sayHi() {
   console.log(`Hello, ${this.firstName}!`);
  }
};
 
setTimeout(function() {
  user.sayHi(); // Hello, John!
}, 1000);

//Function Binding
function mul(a, b) {
    return a * b;
}

let double = mul.bind(null, 2);
console.log( double(3) ); // = mul(2, 3) = 6


//Arrow Functions -> They have very specific and usefull features

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(
        student => console.log(this.title + ': ' + student)
    );}
};
  
group.showList();