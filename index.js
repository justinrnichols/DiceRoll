function rollDice() {
  var randNumDice1 = Math.floor(Math.random() * 6) + 1;
  var changeDiceImg1 = "dice" + randNumDice1 + ".png";
  var randomImgSrc1 = "images/" + changeDiceImg1;
  document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc1);

  var randNumDice2 = Math.floor(Math.random() * 6) + 1;
  var changeDiceImg2 = "dice" + randNumDice2 + ".png";
  var randomImgSrc2 = "images/" + changeDiceImg2;
  document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

  if(randNumDice1 > randNumDice2)
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  else if(randNumDice2 > randNumDice1)
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  else
    document.querySelector("h1").innerHTML = "Draw!";
}
