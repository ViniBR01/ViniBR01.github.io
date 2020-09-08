const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

//let myButtonStart = document.querySelector('button'); //Gets first button
let myButtonStart = document.querySelector('#buttonStart');
let myButtonCast = document.querySelector('#buttonCast');

myButtonStart.onclick = function() {
  goToPlay();
}

myButtonCast.onclick = function() {
  goToCast();
}

function goToPlay() {
    //window.open('./play.html', '_blank'); //open in new window
    window.location = "./play.html";
}

function goToCast() {
    //window.open('./cast.html', '_blank'); //open in new window
    window.location = "./cast.html";
}

