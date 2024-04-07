

function modeSelect() 
	{setTimeout(function (){
		document.getElementById("button3").style.visibility = "visible";
		document.getElementById("button3").onclick = startPage;
		document.getElementById("button1").innerHTML = "Single Player";
		document.getElementById("button1").onclick = singlePlayerPage;
		document.getElementById("button2").innerHTML = "Multiplayer";
		document.getElementById("button2").onclick = startMultiPlayer;
	}, 20);
}

function singlePlayerPage(){
	document.getElementById("button3").style.visibility = "visible";
	document.getElementById("button3").onclick = modeSelect;
	document.getElementById("button1").innerHTML = "Play";
	document.getElementById("button1").onclick = startSinglePlayer;
	document.getElementById("button2").innerHTML = "High Scores";
	document.getElementById("button2").onclick = startMultiPlayer;
}

function startSinglePlayer(){
	window.location.replace('single.html');
}

function startMultiplayer(){
}

function showHighScores(){
	
}

function instructions(){
	window.location.replace('project.html');
}

function startPage(){
	document.getElementById("button1").innerHTML = "Start";
	document.getElementById("button1").onclick = modeSelect;
	document.getElementById("button2").innerHTML = "Instructions";
	document.getElementById("button2").onclick = instructions;
	document.getElementById("button3").style.visibility = "hidden";
}