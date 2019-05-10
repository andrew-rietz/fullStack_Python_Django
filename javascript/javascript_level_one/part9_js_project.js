var firstName_lastName = prompt("What are your first and last names? ");
var age = prompt("How old are you? ");
var height = prompt("What is your height in cm? ");
var pet = prompt("What is your pet's name? ");

names = firstName_lastName.split(" ");
if(names[0][0].toLowerCase() == names[1][0].toLowerCase()){
  var test1 = true;
  console.log("You're a spy! (first letter of names match)");
}

if (age > 20 && age < 30) {
  var test2 = true;
  console.log("You're a spy! (age)");
}

if (height >= 170) {
  var test3 = true;
  console.log("You're a spy! (height)");
}

if (pet[pet.length-1].toLowerCase() == "y") {
  var test4 = true;
  console.log("You're a spy! (pet name ends in \"y\")");
}

if (test1 && test2 && test3 && test4) {
  console.log("You passed the test!")
}
