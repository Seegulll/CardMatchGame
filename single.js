
countdown();
let cardsFlipped = 0;
let flippedCard1 = 0;
let flippedCard2 = 0;

function countdown(){
	setTimeout(function (){
		document.getElementById("countText").innerHTML = "2";
			setTimeout(function (){
				document.getElementById("countText").innerHTML = "1";
				setTimeout(function (){
					shuffleCards();
					document.getElementById("countText").remove();
					document.getElementById("cardArea").style.visibility="visible";
			}, 1000);
		}, 1000);
	}, 1000);
}

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}
}
let cards = [];
function shuffleCards(){
	for (let i = 1; i < 11; i++) {
		cards.push("images/card"+i+".jpg");
		cards.push("images/card"+i+".jpg");
	}
	
	shuffle(cards);

}

function flipCard(cardID){
	if(cardsFlipped < 2){
		cardsFlipped++;
		document.getElementById(cardID).src = cards[parseInt(cardID.substring(4))];
		if(cardsFlipped == 1){
			flippedCard1 = document.getElementById(cardID);
		}else{
			flippedCard2 = document.getElementById(cardID);
			if(flippedCard1.src==flippedCard2.src){
				cardsFlipped = 0;
			}else{
				setTimeout(function (){
					flippedCard1.src = "images/cardflipped.jpg";
					flippedCard2.src = "images/cardflipped.jpg";
					flippedCard1 = 0;
					flippedCard2 = 0;
					cardsFlipped = 0;
				}, 1000);
			}
		}
	}
}

function flipCard2(){
	
}