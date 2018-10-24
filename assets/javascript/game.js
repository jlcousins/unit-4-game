var computerChoice = Math.floor((Math.random()*100) + 1);
var winCount = 0;
var loseCount = 0;
var blueChoice = Math.floor((Math.random()*10) + 1);
var pinkChoice = Math.floor((Math.random()*10) + 1);
var redChoice = Math.floor((Math.random()*10) + 1);
var yellowChoice = Math.floor((Math.random()*10) + 1);
var userTotalScore = 0;


function shuffleCrystalValues(){
	blueChoice =Math.floor((Math.random()*10) + 1);
	pinkChoice = Math.floor((Math.random()*10) + 1);
	redChoice = Math.floor((Math.random()*10) + 1);
	yellowChoice = Math.floor((Math.random()*10) + 1);
}


function gamePlay(){
	if(userTotalScore === computerChoice){
		winCount++;
		$("#win-counter").text(winCount);
		$("#score").text("You win!");
		computerChoice = Math.floor((Math.random()*100) + 1);
		$("#random-number").text(computerChoice);
		userTotalScore = 0;
		$("#finalTotal").text(userTotalScore);
		shuffleCrystalValues();
	} else if(userTotalScore > computerChoice){
		loseCount++;
		$("#loss-counter").html(loseCount);
		$("#score").text("You lose!");
		computerChoice = Math.floor((Math.random()*100) + 1);
		$("#random-number").text(computerChoice);
		userTotalScore = 0;
		$("#finalTotal").text(userTotalScore);
		shuffleCrystalValues();
	}
}



$("#random-number").text(computerChoice);



$("#blue").on("click", function(){
	userTotalScore += blueChoice;
	$("#finalTotal").text(userTotalScore);
	gamePlay();
});


$("#pink").on("click", function(){
	userTotalScore += pinkChoice;
	$("#finalTotal").text(userTotalScore);
	gamePlay();
});


$('#red').on('click', function(){
	userTotalScore += redChoice;
	$('#finalTotal').text(userTotalScore);
	gamePlay();
});


$('#yellow').on('click', function(){
	userTotalScore += yellowChoice;
	$('#finalTotal').text(userTotalScore);
	gamePlay();
});