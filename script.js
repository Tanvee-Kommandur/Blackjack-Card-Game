 /*let firstCard = 10;
let secondCard = 1;
let cards = [firstCard, secondCard];//ordered list of iitems
let sum = firstCard + secondCard ;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let  cardsEl = document.getElementById('cards-el');

function startGame(){
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: " + cards[0]+" "+ cards;
    sumEl.textContent = "Sum : "+ sum;
    if(sum <= 20){
        message =  "Do you want to draw a new card ?";
     }
     else if(sum === 21){
         message = "You've got Blackjack!";
         hasBlackJack = true;
     }
     else{
         message = "You are out of the game!";
         isAlive = false;
     }
     messageEl.textContent = message;
    }

function newCard(){
    let card = 10;
    sum+=card;
    renderGame();
} */

let featuredPost = ["check out my netflix clone", 
"here is the code for my project", 
"I relaunched my portfolio"
]
