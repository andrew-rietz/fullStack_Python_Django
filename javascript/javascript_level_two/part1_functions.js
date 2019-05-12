// The general syntax is:
//
// function name(parameter 1, parameter 2, ...){
//   Code to be executed
// }

function hello(){
  console.log("Hello world!");
}

function helloYou(name) {
  console.log("Hello " + name);
}

// Functions in javascripts are camel cased

function addNum(num1, num2){
  console.log(num1 + num2);
}

// Keep in mind that javascript attempts to coerce variables to
// the "proper" type.

// You can pass in default values for function arguments

function helloSomeone(name = "Frankie") {
  console.log("Hello " + name)
}

// To return values from a function, use the return keyword

function formal(name="Sam", title = "Sir") {
  return title + " " + name;
}

function timeFive(numInput) {
  var result = numInput * 5;
  return result;
}

// Local Scope:
// If a variable is defined only within a function, it's scope is that function
//
// Global scope:
// Javascript with check for a local variable
// If the variable is not in the local function, it will search for a global value
// In the example below, the log calls to "stuff" will return two
// different values. First, within the function, the output will be as
// expected ("Reassign stuff inside func"). That reassignment is LOCAL.
// The next call to stuff is the global variable and returns the global
// value, not the local value.


var v = "GLOBAL V"
var stuff = "GLOBAL STUFF"

function fun(stuff){
  console.log(v);
  stuff = "Reassign stuff inside func";
  console.log(stuff);
}

fun();
console.log(stuff);
