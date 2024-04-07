
countdown();

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

function shuffleCards(){
	let cards = [];
	for (let i = 1; i < 11; i++) {
		cards.push([Math.random(), "images/card1.jpg"]);
		cards.push([Math.random(), "images/card1.jpg"]);
	}
	let sortedCards = [];
	let maxValue = cards[0];
	let maxIndex = 0;
	for (let i = 0; i < 20; i++) {
	}

	for (let i = 0; i < 20; i++) {
		document.getElementById("card"+i).src= "images/card"+(Math.floor(i/2)+1)+".jpg";
	}
}