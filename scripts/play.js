let myButtonReshufle = document.querySelector('#buttonReshufle');
let myButtonBack = document.querySelector('#buttonBack');

myButtonReshufle.onclick = function() {
  reshufleCards();
}

myButtonBack.onclick = function() {
  goToMain();
}

reshufleCards();

function reshufleCards() {
    //This function must display 16 random cards in a 4x4 grid in the screen:
    //Get 16 random values between 0 and 54: from a nique list of numbers
    let allCards = [];
    var i;
    for (i=0; i<55; i++) {
	if (i !== 10 && i !== 22) {
	    allCards.push(i);
	}
    }
    let cards = random16(allCards);

    //Move the background image on the 16 boxes corresponding to each of the images:
    let myCardsArray = [];
    for (i=0; i<16; i++) {
	if (i < 9) {
	    let myCardN = document.getElementById("card0" + (i+1));
	    myCardsArray.push(myCardN);
	} else {
	    let myCardN = document.getElementById("card" + (i+1));
	    myCardsArray.push(myCardN);
	}
    }

    for (i=0; i<16; i++) {
	let current = myCardsArray.pop();
	current.setAttribute("style", "background-position: " + -21.445*parseInt(cards[i]/2, 10) + "vw " + (-1*cards[i]%2)*32 + "vw;");
	//myCardsArray.pop();
    }
    
    
    hideAllBeans();
}

function random16(array) {
    var tmp, current, top = array.length;
    if(top) while(--top) {
	current = Math.floor(Math.random() * (top + 1));
	tmp = array[current];
	array[current] = array[top];
	array[top] = tmp;
    }
    let cards = [];
    for (i=0; i<16; i++) {
	cards.push(array[i]);
    }
    return cards;
}

function hideAllBeans() {
    hideBean("anim01");
    hideBean("anim02");
    hideBean("anim03");
    hideBean("anim04");
    hideBean("anim05");
    hideBean("anim06");
    hideBean("anim07");
    hideBean("anim08");
    hideBean("anim09");
    hideBean("anim10");
    hideBean("anim11");
    hideBean("anim12");
    hideBean("anim13");
    hideBean("anim14");
    hideBean("anim15");
    hideBean("anim16");
}
//Crate animation to hide and show beans:
function toggleBean(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'inline-block')
        e.style.display = 'none';
    else
        e.style.display = 'inline-block';
}
function hideBean(id) {
    var e = document.getElementById(id);
    e.style.display = 'none';
}

function goToMain() {
    window.location = "./index.html";
}

