// Arrays are defined using square brackets
var countries = ["USA", "Germany", "China"]
var countires = [
                  "USA",
                  "Germany",
                  "China"
                ]

// Arrays are zero-based and elements can be referened with square brackets
countries[0]
// >>> "USA"

// You can reassign elements using the same approach:
countries[2] = "France";
countries
// >>> ["USA", "Germany", "Frane"]

// Arrays can hold mixed data types
var mixed = [true, 20, "string"]


// Array length can be determined with "length"
mixed.length
// >>> 3



// Useful array methods:
var myArr = ["one", "two", "three"]
// pop() returns the last item of the array and also removes it from the array
// push() adds an item to the end of an array. Push also returns the new length of the array


// You can nest arrays as well.
var matrix = [[1,2,3], [4,5,6], [7,8,9]]

// Array iteration
var arr = ["A", "B", "C"]
// You could print out each element using a normal for loop:
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i[);
}

// You can also use a for-of loop which creates a temporary iterator variabel
for (letter of arr){
  alert(letter)
}

// Similar is the for-each loop. This loop is specifically used to
// pass each element of the array into a function
arr.forEach(alert);
