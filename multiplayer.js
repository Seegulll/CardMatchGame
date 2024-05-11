document.addEventListener('DOMContentLoaded', function() {
    countdown();
});

function countdown() {
    let count = 3; 
    let countdownElement = document.getElementById("countText");
    let countdownInterval = setInterval(function() {
        count--;
        countdownElement.innerText = count; 

        if (count <= 0) {
            clearInterval(countdownInterval); 
            countdownElement.style.display = 'none'; 
            shuffleAndAssignCards(); 
            document.getElementById("cardArea1").style.visibility = "visible"; 
            document.getElementById("cardArea2").style.visibility = "visible"; 
        }
    }, 1000);
}

let cardsFlipped = 0;
let flippedCards = [];
let scores = [0, 0]; 

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let cards = [];
let cardImages = [];

function shuffleAndAssignCards() {
    cardImages = [];
    
    for (let i = 1; i <= 10; i++) {
        let image = "images/card" + i + ".jpg";
        cardImages.push(image, image); 
    }
    shuffle(cardImages); 

    
    for (let i = 0; i < 20; i++) {
        let cardElement = document.getElementById("card" + i);
        cardElement.src = "images/cardflipped.jpg"; 
        cards[i] = cardImages[i]; 
    }
}

function flipCard(cardID) {
    let card = document.getElementById(cardID);
    let cardIndex = parseInt(cardID.substring(4));
    if (flippedCards.length < 2) {
        card.src = cards[cardIndex]; 
        flippedCards.push({ card, index: cardIndex });
        if (flippedCards.length === 2) {
            if (flippedCards[0].card.src === flippedCards[1].card.src) {
                
                updateScores(true, cardIndex < 10 ? 0 : 1);
                flippedCards = [];
            } else {
                
                setTimeout(() => {
                    flippedCards.forEach(c => c.card.src = "images/cardflipped.jpg");
                    flippedCards = [];
                }, 1000);
            }
        }
    }
}

function updateScores(match, player) {
    if (match) {
        scores[player]++;
        document.getElementById("score" + (player + 1)).innerText = "Score for Player " + (player + 1) + ": " + scores[player];
    }
}