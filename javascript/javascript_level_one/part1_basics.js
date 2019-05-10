// To work with javascript in the browser:
//
// Go to an empty tab
// Enter "Incognito Mode" so that you don't get JS alerts from Gmail
// Inspect Source
// Go to the "Console" tab
//
// You can then write your code directly in the console.
//
// To clear the console:
// clear()

alert("Hello world!")

// anything here is a comment

// BASIC DATA TYPES
// All numbers (floats, ints, etc.) are all treated as the same type

// Strings
// Strings are wrapped in double quotes
//
// Strings are concatenated with the "+" operator
"Hello" + " " + "World!"
"django".length
// >>> 6

"x x".length
// >>> 3


//Escape characters
"hello \n start a new line"

"hello \t give me a tab"

"hello \"quoted text\""

// String Indexing
// Indices start at zero

"hello"[0]
// >>> "h"



// Booleans
// Booleans are entered as lowercase "true" or "false"
//
// Undefined and Null
// Are entered as lowercase "undefined" or "null"
// >> Undefined means something was created, but never actually given a value
// >> Null means that you're setting the variable to nothing on purpose


// Javascript as a basic calculator:

2+2
5-1
3*2
10/2
2/5   // >>> Note, this does true (float) division
2 ** 4 // >>> 16
5%4


// Variables
// var varName = value;
// Note, JS is now pretty flexible wrt what needs to end with a semicolon
// For this course, we'll use the semicolon
//
// In JS, variables are named with camelcase by convention

var bankAccount = 100;
bankAccount
// >>> 100
var deposit = 50;

var total = bankAccount + deposit;
total
// >>> 150

var greeting = "Welcome back: ";
var name = "Andrew"
alert(greeting+name)

var myVariable;
// myVariable is undefined

var bonus = null;
// bonus is null.


// Basic JS Methods
// Alert
alert("Hello World!")
>> Pops up an alert window in the browser

// console.log
console.log("Hello World!")
>> Outputs directly to the console

// prompt
var name = prompt("What's your name? ");
>> Prompts the user for input via a popup window
