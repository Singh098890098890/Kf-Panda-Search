// KF Panda Search
// HTML Variables

let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {

// Input
let name = document.getElementById("char-in").value.toLowerCase();

// If Statement Test the Input
if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
charNameEl.innerHTML = "Po";
charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior!";
document.getElementById("char-img").src = "img/po.png";
} else if (name === "tigress" || name === "master tigress") {
charNameEl.innerHTML = "Tigress";
charQuoteEl.innerHTML = "That was hardcore!";
document.getElementById("char-img").src = "img/tigress.png";
} else if (name === "mantis") {
charNameEl.innerHTML = "Mantis";
charQuoteEl.innerHTML = "Fear the Bug!";
document.getElementById("char-img").src = "img/mantis.png";
} else if (name === "monkey") {
charNameEl.innerHTML = "Monkey";
charQuoteEl.innerHTML = "We should hang out!";
document.getElementById("char-img").src = "img/monkey.png";
} else if (name === "viper") {
charNameEl.innerHTML = "Viper";
charQuoteEl.innerHTML = "I don't need to bite to fight!";
document.getElementById("char-img").src = "img/viper.png";
} else if (name === "crane") {
charNameEl.innerHTML = "Crane";
charQuoteEl.innerHTML = "Wings of Justice!";
document.getElementById("char-img").src = "img/crane.png";
} else {
charNameEl.innerHTML = "?????";
charQuoteEl.innerHTML = "---------";
document.getElementById("char-img").src = "img/question-mark.png";
}
}


let themeInput = document.getElementById('theme-in');
let themeButton = document.getElementById('theme-btn');
let body = document.body;
let h1 = document.getElementById('char-id'); 
let h2 = document.getElementById('char-name'); 
let firstParagraph = document.getElementById('char-quote'); 

themeButton.addEventListener('click', () => {
    const themeValue = themeInput.value.toLowerCase();

    if (themeValue === 'dark' || themeValue === 'black') { 
        body.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        h1.style.color = 'white';
        h2.style.color = 'white';
        firstParagraph.style.color = 'white';
    } else if (themeValue === 'light' || themeValue === 'white') {
        body.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
        h1.style.color = 'black';
        h2.style.color = 'black';
        firstParagraph.style.color = 'black';
    } 
});


