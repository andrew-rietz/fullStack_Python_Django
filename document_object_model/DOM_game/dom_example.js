// var boxOne = document.queryselector("#1")
// var boxTwo = document.queryselector("#2")
// var boxThree = document.queryselector("#3")
// var boxFour = document.queryselector("#4")
// var boxFive = document.queryselector("#5")
// var boxSix = document.queryselector("#6")
// var boxSeven = document.queryselector("#7")
// var boxEight = document.queryselector("#8")
// var boxNine = document.queryselector("#9")

var all_td = document.getElementsByTagName("td");

var markBox = function() {
    var tdText = this.innerText;
    console.log("tdText is " + tdText);
    if (tdText == "") {
      this.innerText = "X";
      console.log("Set td to 'X'")
    } else if (tdText == "X"){
      this.innerText = "O";
      console.log("Set td to 'O'")
    } else {
      this.innerText = "";
      console.log("Set td to ''")
    }
};

var checkWinner = function() {
  // Winning combinations:
  // 0,1,2
  // 3,4,5
  // 6,7,8
  // [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
}

for (var i = 0; i < all_td.length; i++) {
    all_td[i].addEventListener('click', markBox, false);
    all_td[i].addEventListener('click', checkWinner, false);
}
