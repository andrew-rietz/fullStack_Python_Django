// JS objects are hash-tables. They store information as key-value pairs
// In other languages, this would be called a dictionary.
//
//
// Unlike arrays, a JS object does not retain any ordering.
//
// A typical JS object is of the form:
//
// {key1: "value one", key2: "value two", ...}

var carInfo = {
  make:"Toyota",
  year:1990,
  model:"Camry"
}

carInfo["make"]
// >>> "Toyota"

// JS Objects can have mixed data types, and can be nested
var myNewO = {a:"hello", b:[1,2,3],c:{inside:["a","b"]}}

myNewO["a"]
// >>> hello

myNewO["b"][1]
// >>> 2

myNewO["c"]["inside"][1]
// >>> b


// Objects are mutable
carInfo["year"] = 2006
carInfo["year"] += 1


// If your browser won't display the entire object, you can use the
// console.dir command to force the object to be displayed
console.dir(carInfo)


// To iterate through an object you can use a for-in loop
// Keep in mind that the order is random

for(key in carIfno){ //Note that "key" here could be any variable name and is not a keyword.
  console.log (jelly)
}


// Object methods
// Object methods are functions that are inside objects
// Theoretically you could use the object methods to process some
// type of external data. More commonly, you'll want to perform
// some type of method/function on the object itself.
//
// To apply an object method to that object, use the "this" keyword

var carInfo = {
  make:"Toyota",
  year:1990,
  model:"Camry",
  carAlert:function(){
    alert("We've got a car here!")
  }
}

var myObj = {
  prop: 37,
  reportProp: function(){
    return this.prop;
  }
}
console.log(myObj.reportProp());
// logs 37


var simple = {
  prop: "Hello",
  myMethod: function(){
    console.log("The myMethod was called")
  }
}
simple.myMethod()

var myObj = {
  name: "Andrew",
  greet: function(){
    console.log("Hello " + this.name)
  }
}
