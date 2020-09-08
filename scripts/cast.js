let myButtonGetNew = document.querySelector('#buttonGetNew');
let myButtonBack = document.querySelector('#buttonBack');

myButtonGetNew.onclick = function() {
  getNewCard();
}

myButtonBack.onclick = function() {
  goToMain();
}
let allCards = []
allCards = getRandomCards();
let i = 0;

function getRandomCards() {
    let allCards = [];
    var i;
    for (i=0; i<55; i++) {
	if (i !== 10 && i !== 22) {
	    allCards.push(i);
	}
    }
    let cards = random53(allCards);
    return cards;
}
function random53(array) {
    var tmp, current, top = array.length;
    if(top) while(--top) {
	current = Math.floor(Math.random() * (top + 1));
	tmp = array[current];
	array[current] = array[top];
	array[top] = tmp;
    }
    return array;
}

var mont_str = "";

function getNewCard() {
    //First move the previous card into the memory div: id=previousCards
    if (i>0 && i <= 53) {
	//allCards[i-1];
	mont_str = "<div class='allCardsBox' id='previousCard01' style='background-position: "+ -1*142.885*parseInt(allCards[i-1]/2, 10) +"px "+ (-1*allCards[i-1]%2)*215.0 +"px;'></div>" + mont_str;
	document.getElementById("addPrevious").innerHTML = mont_str;
    }
    //window.alert("Test Alert.");
    if (i < 53) {
	//window.alert("Next card: " + allCards[i]);
	//Move background of div w/ id="currentCard" to show image with id allCards[i]
	let newCard = document.getElementById("currentCard");
	newCard.setAttribute("style", "background-position: " + -1*252.97*parseInt(allCards[i]/2, 10) + "px " + (-1*allCards[i]%2)*377.23 + "px;");
	
    } else {
	window.alert("No more cards to draw.");
	let newCard = document.getElementById("currentCard");
	newCard.setAttribute("style", "background-position: -1264px 0px;");
    }
    i++;
}




function goToMain() {
    //window.open('./cast.html', '_blank'); //open in new window
    window.location = "./index.html";
}

