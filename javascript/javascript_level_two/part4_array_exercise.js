var roster = []

function addName(name, roster){
  roster.push(name)
  return roster
}

function removeName(name, roster){
  ind = roster.indexOf(name)
  if(ind > -1){
    roster.splice(ind, 1)
    return roster
  }else {
    return roster
  }
}

function displayRoster(roster){
  console.log(roster)
}

while (true) {
  var action = prompt("What would you like to do? (add, remove, display, or quit) ")
  if( action === "quit"){
    break
  } else if (action === "add"){
    var name = prompt("What name would you like to add? ")
    roster = addName(name, roster)
  } else if (action === "remove"){
    var name = prompt("What name would you like to remove? ")
    roster = removeName(name, roster)
  } else if (action === "display"){
    displayRoster(roster)
  } else{
    alert("Sorry, please try again")
  }
}
